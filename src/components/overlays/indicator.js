// indicator.js
// Base class for on and off chart indicators

import Overlay from "./overlay"
import { renderFillRect } from "../../renderer/rect"
import { renderLine } from "../../renderer/line"
import {
  STREAM_NEWVALUE,
  STREAM_UPDATE
} from "../../definitions/core"

// const plotTypes = {
//   area,
//   bar,
//   channel,
//   line,
// }

const T = 0, O = 1, H = 2, L = 3, C = 4, V = 5;

/**
 * Base class for on and off chart indicators
 * @export
 * @class indicator
 */
export default class indicator extends Overlay {

  #ID
  #name
  #shortName
  #onChart
  #checkParamCount
  #scaleOverlay
  #plots
  #params
  #overlay
  #indicator
  #type
  #TALib
  #range
  #value = [0, 0]
  #newValueCB
  #updateValueCB
  #precision = 2
  #calcParams
  #style = {}

  constructor (target, xAxis=false, yAxis=false, config, parent, params) {

    super(target, xAxis, yAxis, undefined, parent, params)

    this.#params = params
    this.#overlay = params.overlay
    this.#type = config.type
    this.#indicator = config.indicator
    this.#TALib = this.core.TALib
    this.#range = this.xAxis.range

    this.eventsListen()
  }

  get ID() { return this.#ID }
  set ID(id) { this.#ID = id }
  get name() { return this.#name }
  set name(n) { this.#name = n }
  get shortName() { return this.#shortName }
  set shortName(n) { this.#shortName = n }
  get onChart() { return this.#onChart }
  set onChart(c) { this.#onChart = c }
  get checkParamCount() { return this.#checkParamCount }
  set checkParamCount(c) { this.#checkParamCount = c }
  get scaleOverlay() { return this.#scaleOverlay }
  set scaleOverlay(o) { this.#scaleOverlay = o }
  get plots() { return this.#plots }
  set plots(p) { this.#plots = p }
  get params() { return this.#params }
  get Timeline() { return this.core.Timeline }
  get Scale() { return this.parent.scale }
  get type() { return this.#type }
  get overlay() { return this.#overlay }
  get indicator() { return this.#indicator }
  get TALib() { return this.#TALib }
  get range() { return this.core.range }
  set setNewValue(cb) { this.#newValueCB = cb}
  set setUpdateValue(cb) { this.#updateValueCB = cb }
  set precision(p) { this.#precision = p }
  get precision() { return this.#precision }
  set calcParams(p) { this.#calcParams = p }
  get calcParams() { return this.#calcParams }
  set style(s) { this.#style = s }
  get style() { return this.#style }
  set position(p) { this.target.setPosition(p[0], p[1]) }

  set value(data) {
    // round time to nearest current time unit
    const tfms = this.core.time.timeFrameMS
    let roundedTime = Math.floor(new Date(data[T]) / tfms) * tfms
    data[T] = roundedTime

    if (this.#value[T] !== data[T]) {
      this.#value[T] = data[T]
      this.#newValueCB(data)
    }
    else {
      this.#updateValueCB(data)
    }
  }
  get value() {
    return this.#value
  }

  end() {
    // this.off(STREAM_NEWVALUE, this.onStreamNewValue)
    this.off(STREAM_UPDATE, this.onStreamUpdate)
  }

  eventsListen() {
    // this.on(STREAM_NEWVALUE, this.onStreamNewValue.bind(this))
    this.on(STREAM_UPDATE, this.onStreamUpdate.bind(this))
  }

  on(topic, handler, context) {
    this.core.on(topic, handler, context)
  }

  off(topic, handler) {
    this.core.off(topic, handler)
  }

  emit(topic, data) {
    this.core.emit(topic, data)
  }

  onStreamNewValue(value) {
    // this.value = value
    console.log("onStreamNewValue(value):",value)
  }

  onStreamUpdate(candle) {
    // console.log("onStreamUpdate(candle):", candle)
    this.value = candle
  }

  addLegend() {
    let legend = {
      id: this.shortName,
      title: this.shortName,
      type: this.shortName,
      source: this.legendInputs.bind(this)
    }
    this.chart.legend.add(legend)
  }

  indicatorInput(start, end) {
    let input = []
    do {
      input.push(this.range.value(start)[C])
    }
    while (start++ < end)
    return input
  }

  TALibParams() {
    let end = this.range.dataLength
    let step = this.calcParams[0]
    let start = end - step
    let input = this.indicatorInput(start, end)
    let hasNull = input.find(element => element === null)
    if (hasNull) return false
    else return { inReal: input, timePeriod: step }
  }

  /**
 * Calculate indicator values for entire chart history
 * @param {string} indicator - the TALib function to call
 * @param {object} params - parameters for the TALib function
 * @returns {boolean} - success or failure
 */
  calcIndicator (indicator, params) {
    if (!this.core.TALibReady) return false

    this.overlay.data = []
    let step = this.calcParams[0]
    // fail if there is not enough data to calculate
    if (this.range.Length < step) return false

    let data, end, entry, time;
    let start = 0
    let input = this.indicatorInput(start, this.range.Length - 1)
    let hasNull = input.find(element => element === null)
    if (hasNull) return false
    
    do {
      end = start + step
      data = input.slice(start, end)
      entry = this.TALib[indicator](params)
      time = this.range.value(end - 1)[0]
      this.overlay.data.push([time, entry])
      start++
    } 
    while (end < this.range.Length)
    return true
  }

  /**
   * Calculate indicator value for current stream candle
   * @param {string} indicator - the TALib function to call
   * @param {object} params - parameters for the TALib function
   * @returns {array} - indicator data entry
   */
  calcIndicatorStream (indicator, params) {
    if (!this.core.TALibReady) return false

    let entry = this.TALib[indicator](params)
    let end = this.range.dataLength
    let time = this.range.value(end)[0]
    return [time, entry.output[0]]
  }

  /**
   * process stream and create new indicator data entry
   * @param {array} value - current stream candle 
   * @memberof indicator
   */
  newValue (value) {
    let p = this.TALibParams()
    if (!p) return false

    let v = this.calcIndicatorStream(this.shortName, this.TALibParams())
    if (!v) return false

    this.overlay.data.push(v)

    this.target.setPosition(this.core.scrollPos, 0)
    this.draw(this.range)
  }

  /**
   * process stream and update current (last) indicator data entry
   * @param {array} value - current stream candle 
   * @memberof indicator
   */
  UpdateValue (value) {
    let l = this.overlay.data.length - 1
    let p = this.TALibParams()
    if (!p) return false

    let v = this.calcIndicatorStream(this.shortName, p)
    if (!v) return false

    this.overlay.data[l] = [v[0], v[1]]

    this.target.setPosition(this.core.scrollPos, 0)
    this.draw(this.range)
  }

  /**
   * plot 
   *
   * @param {array} plots - array of x y coords [{x:x, y:y}, ...]
   * @param {string} type
   * @param {object} style
   * @memberof indicator
   */
  plot(plots, type, style) {

    const ctx = this.scene.context
    ctx.save();

    switch(type) {
      case "renderLine": renderLine(ctx, plots, style);
      case "renderFillRect": renderFillRect(ctx, plots[0], plots[1], plots[2], plots[3], style)
      default: return;
    }

    ctx.restore();
  }

  draw() {

  }
}
