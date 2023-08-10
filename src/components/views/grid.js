// grid.js
// <tradex-grid></tradex-grid>

import element from "./classes/element"
import graph from "./classes/graph"

const template = document.createElement('template')
template.innerHTML = `
<style>
  .viewport {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
  <div class="viewport"></div>
`

export default class tradeXGrid extends element {

  constructor () {
    super(template)
  }

  destroy() {

  }

  disconnectedCallback() {
  }

  get viewport() { return this.shadowRoot.querySelector('.viewport') }

}

customElements.get('tradex-grid') || window.customElements.define('tradex-grid', tradeXGrid)
