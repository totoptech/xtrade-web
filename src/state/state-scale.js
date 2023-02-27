// state-scale.js

export default 
{
  id: "scale",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(data) {
        this.context.origin.setCursor("ns-resize")

        // console.log(`${this.id}: state: "${this.state}" - onEnter`)
      },
      onExit(data) {
        // console.log(`${this.id}: state: "${this.state}" - onExit (${this.event})`)
      },
      on: {
        resize: {
          target: 'resize',
          action (data) {
            // console.log('transition action for "resize" in "idle" state')
          },
        },
        yAxis_scale: {
          target: 'scale',
          action (data) {
            // console.log('transition action for "yAxis_scale" in "idle" state')
          },
        },
        yAxis_inc: {
          target: 'incremental',
          action (data) {
            // console.log('transition action for "yAxis_inc" in "idle" state')
          },
        },
        yAxis_log: {
          target: 'logarithmic',
          action (data) {
            // console.log('transition action for "yAxis_log" in "idle" state')
          },
        },
        yAxis_100: {
          target: 'percentual',
          action (data) {
            // console.log('transition action for "yAxis_100" in "idle" state')
          },
        },
        setRange: {
          target: 'setRange',
          action (data) {
            // console.log(`${this.id}: transition from "${this.state}" to  "setRange"`)
          },
        },
        scale_drag: {
          target: 'scale_drag',
          condition: 'receiver',
          action (data) {
            // console.log(`${this.id}: transition from "${this.state}" to  "scale_drag"`)
          },
        },
      }
    },
    resize: {
      onEnter(data) {
        // console.log(`${this.id}: state: "${this.state}" - onEnter`)
      },
      onExit(data) {
        // console.log(`${this.id}: state: "${this.state}" - onExit (${this.event})`)
      },
      on: {
        someEvent: {
          target: '',
          action (data) {
            // console.log('transition action for event in "idle" state')
          },
        },
      }
    },
    setRange: {
      onEnter(data) {
        // console.log(`${this.id}: state: "${this.state}" - onEnter`)
      },
      onExit(data) {
        // console.log(`${this.id}: state: "${this.state}" - onExit (${this.event})`)
      },
      on: {
        always: {
          target: 'idle',
          condition: 'zoomDone',
          action (data) {
            // console.log(`${this.id}: transition from "${this.state}" to "idle"`)
            this.context.origin.draw()
          },
        },
      }
    },
    scale_drag: {
      onEnter(data) {
        // if (data.scale.ID == this.context.origin.ID) {
          console.log(`${this.context.origin.ID}: state: "${this.state}" - onEnter`)
          this.context.origin.setScaleRange(data.cursorPos[5]) 
        // }
      },
      onExit(data) {
        // console.log(`${this.id}: state: "${this.state}" - onExit (${this.event})`)
      },
      on: {
        scale_drag: {
          target: 'scale_drag',
          condition: 'receiver',
          action (data) {
            // console.log(`${this.context.origin.ID}: transition from "${this.state}" to "scale_drag"`)
            // this.context.origin.setScaleRange(data.cursorPos[5]) 
          },
        },
        scale_dragDone: {
          target: 'idle',
          condition: 'receiver',
          action (data) {
            console.log(`${this.context.origin.ID}: transition from "${this.state}" to "idle"`)
            // this.context.origin.setScaleRange(data.cursorPos[5]) 
          },
        },
      }
    },

  },
  guards: {
    receiver () { return (this.eventData.scale.ID == this.context.origin.ID) },
    zoomDone () { return true },
  }
}

