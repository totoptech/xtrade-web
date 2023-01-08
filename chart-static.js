import { Chart, DOM } from './src'
import * as talib from "talib-web"
import * as demo from './demo.js'

// import './chart-live.css'

import state from './data/1hour.js'
// import state from './data/seconds.json'


DOM.findBySelector('#app').innerHTML = `
<h2>Static Chart</h2>
<button type="button" onclick="window.chart.resize(600, 500)">Resize Chart</button>
<div>
  <div id="test" style="float:left;"></div>
  <div id="info" style="float:left;"></div>
</div>

`
const config = {
  id: "TradeX_test",
  title: "BTC/USDT",
  // width: 1000,
  // height: 800,
  utils: {none: true},
  tools: {none: true},
  rangeStartTS: 1558429200000, // 21/05/2019, 11:00:00 - 1 hour price
  // rangeStartTS: 1663059600000, // seconds price
  rangeLimit: 30,
  buffer: 5,
  theme: {
    candle: {
      Type: "candle_down_hollow",
      UpBodyColour: "#FAEB2488",
      UpWickColour: "#FAEB24",
      DnBodyColour: "#F900FE88",
      DnWickColour: "#F900FE",
    },
    volume: {
      Height: 15,
      UpColour: "#FAEB2444",
      DnColour: "#F900FE44",
    },
    chart: {
      Background: "#141414",
      BorderColour: "#606060",
      GridColour: "#303030",
      TextColour: "#c0c0c0"
    },
    onChart: {

    },
  },
  isCrypto: true,
  logs: false,
  infos: true,
  warnings: true,
  errors: true,
  // stream: {},
  maxCandleUpdate: 250,
  talib: talib,
  state: state
}
// const chart = Chart.create(mount, config, state)
const chart = document.createElement("tradex-chart")
chart.id = "test"
document.getElementById("app").appendChild(chart)
window.chart = chart
chart.init(config)
chart.start(chart.getModID())

console.log("API: id:", chart.id)
console.log("API: name:", chart.name)
console.log("API: height:", chart.height)

const infoBox = {}
      infoBox.el = DOM.findBySelector('#info')
      infoBox.out = function (info) {
        let inf = `<ul style="color:#FFF; text-align:left;">`
        for (let i in info) {
          inf += `<li>${info[i][0]} <span>${info[i][1]}</span></li>`
        }
        inf += "</ul>"
        infoBox.el.innerHTML = inf
      }

chart.on("chart_zoom", (e) => { infoBox.out(demo.internals()) })
chart.on("chart_pan", (e) => { infoBox.out(demo.internals()) })
chart.on("main_mousemove", (e) => { infoBox.out(demo.internals()) })
infoBox.out(demo.internals())
// test()

let time = chart.range.value()[0]
let interval = 250
let streamInit = false

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min;
}

function stream() {
  let candle 
  if (!streamInit) {
    // candle = chart.allData.data[chart.range.dataLength - 1]
    candle = chart.range.value()
    streamInit = true
    time = time + chart.time.timeFrameMS - interval
  }
  else candle = chart.stream.candle // chart.range.value()

  // let candle = chart.range.value()
  let percent = getRandomInt(0, 1)
  let factor2 = getRandomInt(0, 10) % 2
  let sign = (Math.floor(factor2) === 1) ? 1 : -1
  let price = candle[4] + (candle[4] * (percent / 400 * sign))
      time += interval
  let quantity = candle[5] * (factor2 / 400)
  let tick = {t: time, p: price, q: quantity}

  chart.stream.onTick(tick)
}

if (chart.stream) {
  chart.stream.start()
  const streamTimer = setInterval(stream, interval)
}




