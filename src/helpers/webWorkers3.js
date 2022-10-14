// webWorkers.js
// https://github.com/w3reality/async-thread-worker/blob/master/src/index.js
// https://gist.github.com/sergiodxa/06fabb866653bd8b3165e9fe9fd8036b

import { uid } from "../utils/utilities";
import { isArray, isBoolean, isFunction, isNumber, isObject, isString } from '../utils/typeChecks'
import { timestampDiff } from "../utils/time";


export default class WebWorker {

  static #threads = new Map()

  static ThreadWorker = class ThreadWorker {

    #fn

    constructor (fn) {
      this.#fn = fn
      self.onmessage = m => this._onmessage(m)
    }

    _onmessage (m) {
      const {r, data} = m
      const result = this.#fn(data)
      self.postMessage({r, result})
    }
  }

  static Thread = class Thread {

    #ID
    #cb
    #err
    #req = 0
    #reqList = {}
    #worker

    constructor(ID, fn, cb, err) {
      this.#ID = ID
      this.#cb = cb
      this.#err = err
      const workerFn = `
        ${WebWorker.ThreadWorker.toString()};
        const fn = ${fn}
        const worker = new ThreadWorker(fn)
      `
      const blob = new Blob([`;(() => {${workerFn}})()`], { type: 'text/javascript' })
      const blobURL = URL.createObjectURL(blob)
      this.#worker = new Worker(blobURL);
      URL.revokeObjectURL(blobURL);
    }

    get ID() { return this.#ID }
    get req() { return `r_${this.#req}` }

    onmessage(m) {
      return (isFunction(this.#cb))? this.#cb(m.data) : result = m.data
    }

    onerror(e) {
      return (isFunction(this.#err))? this.#err(e) : e
    }

    postMessage(m) {
      return new Promise((resolve, reject) => {
        try {
          let r = this.req
          this.#reqList[r] = {resolve, reject}

          this.#worker.postMessage({r, m})

          this.#worker.onmessage = m => {
            const {r, result} = m
            if (r in this.#reqList) {
              const {resolve, reject} = this.#reqList[r]
              delete this.#reqList[r]
              resolve(this.onmessage(result))
            }
          }

          this.#worker.onerror = e => {
            reject(this.onerror(e))
          }

        } catch (error) { reject(error) }
      })
      
    }

    terminate() {
      this.#worker.terminate()
    }
  }


  static create(ID="worker", worker, cb, core) {
    if (typeof window.Worker === "undefined") return false
    if (isFunction(worker)) {
      worker = worker.toString()
    }
    else if (isString(worker)) {
      // is function definition?
      // is URL path?
    }
    else { return false }
    
    ID = (isString(ID))? uid(ID) : uid("worker")
    WebWorker.#threads.set(ID, new WebWorker.Thread(ID, worker, cb))
    return WebWorker.#threads.get(ID)
  }

  static destroy(ID) {
    if (!isString(ID)) return false

    WebWorker.#threads.get(ID).terminate()
    WebWorker.#threads.delete(ID)
  }
}


function doSomething() { 
  // console.log("Do something...")
  return "I did something."
}

const test = WebWorker.create("WT", doSomething)
const result = await test.postMessage("bla")
console.log(result)
