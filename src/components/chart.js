// chart.js
// Chart - where most of the magic happens
// Providing: the playground for price movements, indicators and drawing tools

import DOM from "../utils/DOM"
import ScaleBar from "./scale"
import {
  NAME,
  ID,
  CLASS_DEFAULT,
  CLASS_UTILS ,
  CLASS_BODY,
  CLASS_WIDGETSG,
  CLASS_TOOLS,
  CLASS_MAIN,
  CLASS_TIME,
  CLASS_ROWS,
  CLASS_ROW,
  CLASS_CHART,
  CLASS_SCALE,
  CLASS_WIDGETS,
  CLASS_ONCHART,
  CLASS_OFFCHART,
} from '../definitions/core'

const STYLE_CHART = "position: absolute; top: 0; left: 0; border: 1px solid; border-top: none; border-bottom: none;"
const STYLE_SCALE = "position: absolute; top: 0; right: 0; border-left: 1px solid;"
export default class Chart {

  #name = "Chart"
  #shortName = "chart"
  #mediator
  #options
  #elChart
  #elWidgets
  #elCanvas
  #elScale

  #Scale

  constructor (mediator, options) {

    this.#mediator = mediator
    this.#elChart = mediator.api.elements.elChart
    this.init(options)
  }

  log(l) { this.#mediator.log(l) }
  info(i) { this.#mediator.info(i) }
  warning(w) { this.#mediator.warn(w) }
  error(e) { this.#mediator.error(e) }

  get name() {return this.#name}
  get shortName() {return this.#shortName}
  get mediator() {return this.#mediator}
  get options() {return this.#options}
  get scale() { return this.#Scale }
  get elScale() { return this.#elScale }

  init(options) {
    this.mount(this.#elChart)

    // api - functions / methods, calculated properties provided by this module
    const api = this.#mediator.api
    api.elements = 
    {...api.elements, 
      ...{
        elWidgets: this.#elWidgets,
        elCanvas: this.#elCanvas,
        elScale: this.#elScale
      }
    }

    this.#Scale = this.#mediator.register("ScaleBar", ScaleBar, options, api)

    this.log(`${this.#name} instantiated`)
  }


  start() {

  }

  end() {
    
  }

  mount(el) {
    el.innerHTML = this.defaultNode()

    const api = this.#mediator.api
    this.#elWidgets = DOM.findBySelector(`#${api.id} .${CLASS_WIDGETS}`)
    this.#elCanvas = DOM.findBySelector(`#${api.id} .${CLASS_CHART} canvas`)
    this.#elScale = DOM.findBySelector(`#${api.id} .${CLASS_CHART} .${CLASS_SCALE}`)
  }

  defaultNode() {
    const api = this.#mediator.api
    const styleChart = STYLE_CHART + ` border-color: ${api.chartBorderColour};`
    const styleScale = STYLE_SCALE + ` width: ${api.scaleW - 1}px; border-color: ${api.chartBorderColour};`
    
    const rowsH = DOM.findBySelector(`#${api.id} .${CLASS_ROWS}`).clientHeight
    const rowsW = DOM.findBySelector(`#${api.id} .${CLASS_ROWS}`).clientWidth - 1
    const chartH = rowsH - 1
    const chartW = rowsW - api.scaleW

    const node = `
      <div class="${CLASS_WIDGETS}"></div>
      <canvas id="" width="${chartW}" height="${chartH}" style="${styleChart}"></canvas>
      <div class="${CLASS_SCALE}" style="${styleScale}"></div>
    `
    return node
  }

}
