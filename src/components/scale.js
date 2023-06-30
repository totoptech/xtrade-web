// scale.js
// Scale bar that lives on the side of the chart

import { isArray } from '../utils/typeChecks'
import DOM from "../utils/DOM"
import yAxis from "./axis/yAxis"
import StateMachine from "../scaleX/stateMachne"
import stateMachineConfig from "../state/state-scale"
import Input from "../input"
import { copyDeep, throttle, uid, xMap } from '../utils/utilities'
import { STREAM_UPDATE } from "../definitions/core"

import Graph from "./views/classes/graph"
import ScaleCursor from './overlays/scale-cursor'
import ScaleLabels from './overlays/scale-labels'
import ScaleOverly from './overlays/scale-overlays'
import ScalePriceLine from './overlays/scale-priceLine'

const defaultOverlays = [
  ["labels", {class: ScaleLabels, fixed: true, required: true}],
  ["overlay", {class: ScaleOverly, fixed: true, required: true}],
  ["price", {class: ScalePriceLine, fixed: true, required: true}],
  ["cursor", {class: ScaleCursor, fixed: true, required: true}],
]

/**
 * Provides the chart panes scale / yAxis
 * @export
 * @class ScaleBar
 */
export default class ScaleBar {

  #id
  #name = "Y Scale Axis"
  #shortName = "scale"
  #core
  #options
  #parent
  #stateMachine

  #chart
  #target
  #yAxis
  #element
  #elViewport

  #layerLabels
  #layerOverlays
  #layerPriceLine
  #layerCursor
  #scaleOverlays = new xMap()
  #Graph

  #input
  #priceLine
  #cursorPos
  #position = {}

  constructor (core, options) {

    this.#core = core
    this.#options = {...options}
    this.#element = this.#options.elScale
    this.#chart = this.#options.chart
    this.#parent = this.#options.parent
    this.id = `${this.#parent.id}_scale`
    this.init()
  }

  log(l) { this.#core.log(l) }
  info(i) { this.#core.info(i) }
  warn(w) { this.#core.warn(w) }
  error(e) { this.#core.error(e) }

  set id(id) { this.#id = String(id).replace(/ |,|;|:|\.|#/g, "_") }
  get id() { return (this.#id) ? `${this.#id}` : `${this.#core.id}-${this.#shortName}`.replace(/ |,|;|:|\.|#/g, "_") }
  get name() { return this.#name }
  get shortName() { return this.#shortName }
  get core() { return this.#core }
  get options() { return this.#options }
  get parent() { return this.#parent }
  set height(h) { this.setHeight(h) }
  get height() { return this.#element.getBoundingClientRect().height }
  get width() { return this.#element.getBoundingClientRect().width }
  get element() { return this.#element }
  set cursor(c) { this.#element.style.cursor = c }
  get cursor() { return this.#element.style.cursor }
  get layerCursor() { return this.#layerCursor }
  get layerLabels() { return this.#layerLabels }
  get layerOverlays() { return this.#layerOverlays }
  get layerPriceLine() { return this.#layerPriceLine }
  get yAxis() { return this.#yAxis }
  set yAxisType(t) { this.#yAxis.yAxisType = YAXIS_TYPES.includes(t) ? t : YAXIS_TYPES[0] }
  get yAxisType() { return this.#yAxis.yAxisType }
  get yAxisHeight() { return this.#yAxis.height }
  get yAxisRatio() { return this.#yAxis.yAxisRatio }
  get yAxisGrads() { return this.#yAxis.yAxisGrads }
  set graph(g) { this.#Graph = g }
  get graph() { return this.#Graph }
  get pos() { return this.dimensions }
  get dimensions() { return DOM.elementDimPos(this.#element) }
  get theme() { return this.#core.theme }
  get config() { return this.#core.config }
  set scaleRange(r) { this.setScaleRange(r) }
  set rangeMode(m) { this.#yAxis.mode = m }
  get rangeMode() { return this.#yAxis.mode }
  set rangeYFactor(f) { this.core.range.yFactor(f) }
  set yOffset(o) { this.#yAxis.offset = o }
  get yOffset() { return this.#yAxis.offset }
  set stateMachine(config) { this.#stateMachine = new StateMachine(config, this) }
  get stateMachine() { return this.#stateMachine }
  get Scale() { return this }

  init() {
    this.#elViewport = this.#element.viewport || this.#element
  }

  start() {
    const range = (this.#parent.name == "Chart" ) ? 
      undefined : this.#parent.localRange
    this.#yAxis = new yAxis(this, this, this.options.yAxisType, range)

    this.createGraph()
    this.addOverlays([])
    this.#yAxis.calcGradations()
    this.draw()
    this.eventsListen()

    // start State Machine 
    const newConfig = copyDeep(stateMachineConfig)
    newConfig.id = this.id
    newConfig.context = this
    this.stateMachine = newConfig
    this.stateMachine.start()
  }

  destroy() {
    this.stateMachine.destroy()
    this.#Graph.destroy()
    this.#input.destroy()

    this.off(`${this.#parent.id}_mousemove`, this.onMouseMove)
    this.off(`${this.#parent.id}_mouseout`, this.#layerCursor.erase)
    this.off(STREAM_UPDATE, this.onStreamUpdate)

    this.element.remove()
  }

  eventsListen() {
    let canvas = this.#Graph.viewport.scene.canvas
    this.#input = new Input(canvas, {disableContextMenu: false});
    this.#input.setCursor("ns-resize")
    // this.#input.on("pointerdrag", throttle(this.onDrag, 100, this, true));
    this.#input.on("pointerdrag", this.onDrag.bind(this));

    this.#input.on("pointerdragend", this.onDragDone.bind(this))
    this.#input.on("wheel", this.onMouseWheel.bind(this))
    this.#input.on("dblclick", this.resetScaleRange.bind(this))

    this.on(`${this.#parent.id}_mousemove`, this.onMouseMove, this)
    this.on(`${this.#parent.id}_mouseout`, this.#layerCursor.erase, this.#layerCursor)
    this.on(STREAM_UPDATE, this.#layerPriceLine.draw, this.#layerPriceLine)
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

  onResize(dimensions) {
    this.setDimensions(dimensions)
  }

  onMouseMove(e) {
    this.#cursorPos = (isArray(e)) ? e : [Math.floor(e.position.x), Math.floor(e.position.y)]
    this.#layerCursor.draw(this.#cursorPos)
  }

  onDrag(e) {
    this.#cursorPos = [
      Math.floor(e.position.x), Math.floor(e.position.y),
      e.dragstart.x, e.dragstart.y,
      e.movement.x, e.movement.y
    ]
    this.setScaleRange(Math.sign(e.movement.y))
    this.render()
  }

  onDragDone(e) {

  }

  onMouseWheel(e) {
    e.domEvent.preventDefault()

    const direction = Math.sign(e.wheeldelta) * -1
    this.setScaleRange(direction)
    this.render()
  }

  onStreamUpdate(e) {

  }

  primaryPaneDrag(e) {
    if (this.#yAxis.mode !== "manual") return
    this.#yAxis.offset = e.domEvent.srcEvent.movementY // this.#core.MainPane.cursorPos[5] // e[5]
    this.parent.draw(this.range, true)
    this.draw()
  }

  setHeight(h) {
    this.#element.style.height = `${h}px`
  }

  setDimensions(dim) {
    const width = this.#element.getBoundingClientRect().width
    this.setHeight(dim.h)
    if (this.graph instanceof Graph) {
      this.#Graph.setSize(width, dim.h, width)
      this.draw()
    }
  }

  /**
   * Set price chart or off chart indicator to manual scaling and positioning
   * @param {number} r - scale adjustment value
   */
  setScaleRange(r=0) {
    if (this.#yAxis.mode == "automatic") this.#yAxis.mode = "manual"

    this.#yAxis.zoom = r
    this.parent.draw(this.range, true)
    this.draw()
  }

  /**
   * Set price chart or off chart indicator to automatic scaling and positioning
   * @param {number} r - scale adjustment value
   */
  resetScaleRange() {
    this.#yAxis.mode = "automatic"
    this.parent.draw(this.range, true)
    this.draw()
  }

  // convert chart price or secondary indicator y data to pixel pos
  yPos(yData) { return this.#yAxis.yPos(yData) }

  yPosStream(yData) { return this.#yAxis.lastYData2Pixel(yData) }

  // convert pixel pos to chart price
  yPos2Price(y) { return this.#yAxis.yPos2Price(y) }

  nicePrice($) {
    let digits = this.#yAxis.countDigits($)
    return this.#yAxis.limitPrecision(digits)
  }


  createGraph() {
    let overlays = copyDeep(defaultOverlays)

    this.graph = new Graph(this, this.#elViewport, overlays, false)
    this.#layerCursor = this.graph.overlays.get("cursor").instance
    this.#layerLabels = this.graph.overlays.get("labels").instance
    this.#layerOverlays = this.graph.overlays.get("overlay").instance
    this.#layerPriceLine = this.graph.overlays.get("price").instance
  }

  /**
   * Add any non-default overlays
   *
   * @param {Array} overlays
   * @memberof Scale
   */
  addOverlays(overlays) {
    for (let o of overlays) {
      // const config = {fixed: false, required: false}
      // if (o.type in this.core.TALib) {
      //   config.class = this.core.indicatorClasses[o.type].ind
      //   config.params = {overlay: o}
      //   this.#scaleOverlays.set(o.name, config)
      // }
    }
    this.graph.addOverlays(Array.from(this.#scaleOverlays))
  }

  render() {
    this.#Graph.render()
  }

  draw(range=this.range, update=true) {
    this.#Graph.draw(range, update)
    this.#parent.drawGrid()
  }

  resize(width=this.width, height=this.height) {
    // adjust parent element
    this.setDimensions({w: width, h: height})
  }

}
