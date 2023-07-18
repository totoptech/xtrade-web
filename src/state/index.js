// state.js
// Data state management for the entire chart component library thingy

import { isArray, isBoolean, isNumber, isObject, isString } from '../utils/typeChecks'
import Dataset from '../model/dataset'
import { validateDeep, validateShallow, sanitizeCandles } from '../model/validateData'
import { copyDeep, mergeDeep, xMap, uid } from '../utils/utilities'
import { calcTimeIndex, detectInterval } from '../model/range'
import { ms2Interval, SECOND_MS } from '../utils/time'
import { DEFAULT_TIMEFRAME, DEFAULT_TIMEFRAMEMS } from '../definitions/chart'
import { SHORTNAME } from '../definitions/core'
import TradeXchart from '../core'

const DEFAULTSTATEID = "defaultState"
const DEFAULT_STATE = {
  id: DEFAULTSTATEID,
  key: "",
  status: "default",
  isEmpty: true,
  chart: {
    name: "Primary",
    type: "candles",
    candleType: "CANDLE_SOLID",
    indexed: false,
    data: [],
    settings: {},
    tf: DEFAULT_TIMEFRAME,
    tfms: DEFAULT_TIMEFRAMEMS
  },
  views: [],
  primary: [],
  secondary: [],
  datasets: [],
  tools: [],
  ohlcv: []
}


export default class State {

  static #stateList = new xMap()
  
  static get default() { return copyDeep(DEFAULT_STATE) }
  static get list() { return State.#stateList }

  static create(state, deepValidate=false, isCrypto=false) {
    const instance = new State(state, deepValidate, isCrypto)
    const key = instance.key
    State.#stateList.set(key,instance)
    return instance
  }

  static validate(state, deepValidate=false, isCrypto=false) {

    const defaultState = this.default

    if (!isObject(state)) {
      state = {}
    }
    if (!isObject(state.chart)) {
      state.chart = defaultState.chart
      state.chart.isEmpty = true
      state.chart.data = (isArray(state.ohlcv)) ? state.ohlcv : []
      // Remove ohlcv we have Data
      delete state.ohlcv
    }

    state = mergeDeep(defaultState, state)

    if (deepValidate) 
      state.chart.data = validateDeep(state.chart.data, isCrypto) ? state.chart.data : []
    else 
      state.chart.data = validateShallow(state.chart.data, isCrypto) ? state.chart.data : []

    state.chart.isEmpty = (state.chart.data.length == 0) ? true : false

    if (!isNumber(state.chart?.tf) || deepValidate) {
      let tfms = detectInterval(state.chart.data)
      // this SHOULD never happen, 
      // but there are limits to fixing broken data sent to chart
      if (tfms < SECOND_MS) tfms = DEFAULT_TIMEFRAMEMS
      state.chart.tfms = tfms
    }
    
    if (!isString(state.chart?.tfms) || deepValidate)
      state.chart.tf = ms2Interval(state.chart.tfms)
    
    if (!isArray(state.views)) {
      state.views = defaultState.views
    }

    if (!isArray(state.primary)) {
        state.primary = defaultState.primary
    }

    if (!isArray(state.secondary)) {
        state.secondary = defaultState.secondary
    }

    if (!isObject(state.chart.settings)) {
        state.chart.settings = defaultState.chart.settings
    }

    if (!isArray(state.datasets)) {
        state.datasets = []
    }

    // Build chart order
    if (state.views.length == 0) {
      // add primary chart
      state.views.push(["primary", state.primary])
      // add secondary charts if they exist
      for (let o in state) {
        if (o.indexOf("secondary") == 0) {
          state.views.push([o, state[o]])
        }
      }
    }
    // Process chart order
    let o = state.views
    let c = o.length
    while (c--) {
      if (!isArray(o[c]) || o[c].length == 0)
        o.splice(c, 1)
      else {
        // check each indicator entry
        let i = state.views[c][1]
        let x = i.length
        while (x--) {
          if (!isObject(i[x]) &&
              !isString(i[x].name) &&
              !isString(i[x].type) &&
              !isArray(i[x].data))
                i.splice(x, 1)
          else if (!isObject(i[x].settings))
            i[x].settings = {}
        }
        // if after check, no valid indicators, delete entry
        if (o[c].length == 0) o.splice(c, 1)
      }
    }
    // ensure state has the mandatory primary entry
    if (state.views.length == 0)
      state.views[0] = ["primary", defaultState.primary]
    state.views = new xMap(state.views)
    if (!state.views.has("primary")) 
      state.views.insert("primary", defaultState.primary, 0)
    state.views.get("primary").push(state.chart)

    // Init dataset proxies
    for (var ds of state.datasets) {
      if (!this.#dss) this.#dss = {}
      this.dss[ds.id] = new Dataset(this, ds)
    }

    return state
  }

  static delete(key) {
    if (!isString(key) ||
        !State.has(key)
      ) return false
    State.#stateList.delete(key)
  }

  static has(key) {
    return State.#stateList.has(key)
  }

  static get(key) {
    return State.#stateList.get(key)
  }

  /**
 * export state - default json
 * @param {string} key - state unique identifier
 * @param {Object} [config={}] - default {type:"json"}
 * @returns {*}  
 * @memberof State
 */
  static export(key, config={}) {
    if (!State.has(key)) return false
    if (!isObject(config)) config = {}
    const state = State.get(key)
    const type = config?.type
    const data = copyDeep(state.data)
    const vals = data.chart.data
    let stateExport;

    // trim streaming candle because it is not complete
    if (vals.length > 0 &&
        vals[vals.length - 1].length > 6)
        vals.length = vals.length - 1
    data.views.get("primary").pop()
    // convert Map/() to array
    data.views = Array.from(data.views)

    switch(type) {
      case "json":
      default :
        const {replacer, space} = {...config};
        stateExport = JSON.stringify(data, replacer, space);
    }
    return stateExport
  }
  
  #id = ""
  #key = ""
  #data = {}
  #dss = {}
  #core
  #status = false
  #isEmpty = true
  #mergeList = []

  constructor(state, deepValidate=false, isCrypto=false) {
    // validate state
    if (isObject(state)) {
      this.#data = State.validate(state, deepValidate, isCrypto)
      this.#status = "valid"
      this.#isEmpty = (this.#data.chart?.isEmpty) ? true : false
      this.#core = (state?.core instanceof TradeXchart) ? state.core : undefined
    }
    else {
      this.#data = State.default
      this.#status = "default"
      this.#isEmpty = true
    }
    this.#id = state?.id || ""
    this.#key = uid(`${SHORTNAME}_state`)
  }

  get id() { return this.#id }
  get key() { return this.#key }
  get status() { return this.#status }
  get isEmpty() { return this.#isEmpty }
  get allData() {
    return {
      data: this.#data.chart.data,
      primaryPane: this.#data.secondary,
      secondaryPane: this.#data.secondary,
      datasets: this.#data.datasets
    }
  }
  get data() { return this.#data }
  get core() { return (this.#core !== undefined) ? this.#core : false }
  get time() { return this.#core.time }
  get range() { return this.#core.range }
  
  error(e) { this.#core.error(e) }

  /**
   * validate and register a chart state
   * @param {Object} state 
   * @param {boolean} deepValidate - validate every entry rather than a sample
   * @param {boolean} isCrypto - validate time stamps against BTC genesis block
   * @returns {State} - State instance
   */
  create(state, deepValidate, isCrypto) {
    return State.create(state, deepValidate, isCrypto)
  }

  /**
   * delete a current or stored chart state
   * @param {string} key - state id
   * @returns {boolean}
   */
  delete(key) {
    if (!isString(key)) return false
    // delete any state but this instance
    if (key !== this.key) {
      State.delete(key)
    }
    // if delete this instance
    // create an empty default state to replace it
    else {
      if (State.has(key)) {
        const empty = State.create()
        this.use(empty.key)
        State.delete(key)
      }
    }
    return true
  }

  list() {
    return State.list
  }

  has(key) {
    return State.has(key)
  }

  get(key) {
    return State.get(key)
  }

  use(key) {
    const core = this.core

    // invalid state id
    if (!State.has(key)) {
      core.warn(`${core.name} id: ${core.id} : Specified state does not exist`)
      return false
    }

    // same as current state, nothing to do
    if (key === this.key) return true
    
    // stop any streams
    core.stream.stop()
    // clean up panes
    core.MainPane.reset()
    // set chart to use state
    let source = State.get(key)
    this.#id = source.id
    // this.#key = source.key
    this.#status = source.status
    this.#isEmpty = source.isEmpty
    this.#data = source.data

    // create new Range
    const rangeConfig = {
      interval: source.data.chart.tfms,
      core
    }
    core.getRange(null, null, rangeConfig)

    // set Range
    if (this.range.Length > 1) {
      const rangeStart = calcTimeIndex(core.time, undefined)
      const end = (rangeStart) ? 
        rangeStart + this.range.initialCnt :
        source.data.length - 1
      const start = (rangeStart) ? rangeStart : end - this.range.initialCnt
      this.range.initialCnt = end - start
      core.setRange(start, end)
    }

    // rebuild chart
    core.MainPane.restart()

    core.refresh()
  }

  /**
   * export state as an object
   * @param {string} key - state id
   * @param {Object} config 
   * @returns {Object}
   */
  export(key=this.key, config={}) {
    return State.export(key, config={})
  }

  /**
   * Merge a block of data into the state.
   * Used for populating a chart with back history.
   * Merge data must follow a State format.
   * Optionally set a new range upon merge.
   * @param {Object} merge - merge data must be formatted to a Chart State
   * @param {boolean|object} newRange - false | {start: number, end: number}
   */
  // TODO: merge indicator data?
  // TODO: merge dataset?
  mergeData(merge, newRange=false, calc=true) {
    if (!isObject(merge)) {
      this.error(`ERROR: ${this.id}: merge data must be type Object!`)
      return false
    }

    let end = merge.data.length -1
    // if the chart empty is empty set the range to the merge data
    if (this.#isEmpty || !isNumber(this.time.timeFrameMS)) {
      if (!isObject(newRange) ||
          !isNumber(newRange.start) ||
          !isNumber(newRange.end) ) {

        if (end > 1) {
          newRange = {start: end - this.range.initialCnt, end}
        }
      }
    }
    // timeframes don't match
    if (end > 1 &&
        this.time.timeFrameMS !== detectInterval(merge.data)) {
      this.error(`ERROR: ${this.core.id}: merge data time frame does not match existing time frame!`)
      return false
    }
    // Not valid chart data
    if ("data" in merge &&
        !isArray(merge.data)) {
      this.error(`ERROR: ${this.core.id}: merge chart data must be of type Array!`)
      return false
    }
    // convert newRange values to timestamps
    if (isObject(newRange)) {
      newRange.start = (isNumber(newRange.start)) ? this.range.value(newRange.start)[0] : this.range.timeMin
      newRange.end = (isNumber(newRange.end)) ? this.range.value(newRange.end)[0] : this.range.timeMax
    }

    let i, j, start;
    let mData = merge?.data || false
    const data = this.allData.data
    const primaryPane = this.allData?.primaryPane
    const mPrimary = merge?.primaryPane || false
    const secondaryPane = this.allData?.secondaryPane
    const mSecondary = merge?.secondaryPane || false
    const dataset = this.allData?.dataset?.data
    const mDataset = merge?.dataset?.data || false
    const trades = this.allData?.trades?.data
    const mTrades = merge?.trades?.data || false
    const inc = (this.range.inRange(mData[0][0])) ? 1 : 0
    const refresh = {}

    // Do we have price data?
    if (isArray(mData) && mData.length > 0) {
      i = mData.length - 1
      j = data.length - 1

      refresh.mData = 
      this.range.inRange(mData[0][0]) &&
      this.range.inRange(mData[0][i])

      // if not a candle stream
      if (!isBoolean(mData[i][7]) &&
          mData[i].length !== 8 &&
          mData[i][6] !== null &&
          mData[i][7] !== true
          ) {
        // sanitize data, must be numbers
        // entries must be: [ts,o,h,l,c,v]
        mData = sanitizeCandles(mData)
      }
      
      // chart is empty so simply add the new data
      if (data.length == 0) {
        this.allData.data.push(...mData)
      }
      // chart has data, check for overlap
      else {
        let merged = []
        let older, newer;
        newRange = (newRange) ? newRange :
          {
            start: this.range.timeMin,
            end: this.range.timeMax
          }

        if (data[0][0] < mData[0][0]) {
          older = data
          newer = mData
        }
        else {
          older = mData
          newer = data
        }

        // handle price stream
        if (newer.length == 1 &&
            newer[0][0] == older[older.length-1][0]) {
            older[older.length-1] = newer[0]
            merged = older
        }
        else if (newer.length == 1 &&
            newer[0][0] == older[older.length-1][0] + this.range.interval) {
            merged = older.concat(newer)
        }

        // overlap between existing data and merge data
        else if (older[older.length-1][0] >= newer[0][0]) {
          let o = 0
          while (older[o][0] < newer[0][0]) {
            merged.push(older[o])
            o++
          }

          // append newer array
          merged = merged.concat(newer)
          // are there any trailing entries to append?
          let i = o + newer.length
          if (i < older.length) {
            merged = merged.concat(older.slice(i))
          }
        }

        // no overlap, but a gap exists
        else if (newer[0][0] - older[older.length-1][0] > this.range.interval) {
          merged = older
          let fill = older[older.length-1][0]
          let gap = Math.floor((newer[0][0] - fill) / this.range.interval)
          for(gap; gap > 0; gap--) {
            merged.push([fill,null,null,null,null,null])
            merged = merged.concat(newer)
          }
        }

        // no overlap, insert the new data
        else {
          merged = older.concat(newer)
        }

        this.data.chart.data = merged
      }
      if (calc) this.#core.calcAllIndicators()

  /*
  * chart will ignore any indicators in merge data
  * for sanity reasons, instead will trigger 
  * calculation for merged data for existing indicators

      // Do we have primaryPane indicators?
      if (isArray(mPrimary) && mPrimary.length > 0) {
        for (let o of mPrimary) {
          // if (o )
          if (isArray(o?.data) && o?.data.length > 0) {

          }
        }
      }

      // Do we have secondaryPane indicators?
      if (isArray(mSecondary) && mSecondary.length > 0) {
        for (let o of mSecondary) {
          if (isArray(o?.data) && o?.data.length > 0) {

          }
        }
      }
  */
      // Do we have datasets?
      if (isArray(mDataset) && mDataset.length > 0) {
        for (let o of mDataset) {
          if (isArray(o?.data) && o?.data.length > 0) {

          }
        }
      }

      // Do we have trades?
      if (isArray(trades) && trades.length > 0) {
        for (let d of trades) {
          
        }
      }

      if (newRange) {
        if (isObject(newRange)) {
          start = (isNumber(newRange.start)) ? this.range.getTimeIndex(newRange.start) : this.range.indexStart
          end = (isNumber(newRange.end)) ? this.range.getTimeIndex(newRange.end) : this.range.indexEnd
        }
        else {
          if (mData[0][0] )
          start = this.range.indexStart + inc
          end = this.range.indexEnd + inc
        }
        this.#core.setRange(start, end)
      }

      let r, u = false;
      for (r in refresh) {
        u || r
      }

      if (merge.data.length > 1) this.#core.emit("state_mergeComplete")

      this.#core.refresh()
      this.#isEmpty = false
      return true
    }
  }
}
