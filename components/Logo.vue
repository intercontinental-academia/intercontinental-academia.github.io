<template>
  <svg
    class="logo-loader"
    :class="{ play: active }"
    :style="'width:' + size + 'px;height:' + size + 'px'"
    @mouseenter="trigger()"
    @animationend="finishedAnimation($event)"
  >
    <circle
      :style="
        'stroke-width:' +
        size / 24.44 +
        ';stroke-dasharray:1;stroke:' +
        colors[0] +
        ';'
      "
      :cx="size / 2"
      :cy="size / 2"
      :r="size / 11"
    />
    <circle
      :style="
        'stroke-width:' +
        size / 24.44 +
        ';stroke-dasharray:' +
        size / 1.22 +
        ' ' +
        size / 4.4 +
        ';stroke-dashoffset:' +
        size / 2.59 +
        ';stroke:' +
        colors[1] +
        ';'
      "
      :cx="size / 2"
      :cy="size / 2"
      :r="size / 5.64"
    />
    <circle
      :style="
        'stroke-width:' +
        size / 24.44 +
        ';stroke-dasharray:' +
        size / 1.1 +
        ' ' +
        size / 1.375 +
        ';stroke-dashoffset:' +
        size / 5.5 +
        ';stroke:' +
        colors[2] +
        ';'
      "
      :cx="size / 2"
      :cy="size / 2"
      :r="size / 3.8"
    />
    <circle
      :style="
        'stroke-width:' +
        size / 24.44 +
        ';stroke-dasharray:' +
        size / 1.22 +
        ' ' +
        size / 0.44 +
        ';stroke-dashoffset:' +
        -Math.abs(size / 3.143) +
        ';stroke:' +
        colors[3] +
        ';'
      "
      :cx="size / 2"
      :cy="size / 2"
      :r="size / 2.86"
    />
    <circle
      :style="
        'stroke-width:' +
        size / 24.44 +
        ';stroke-dasharray:' +
        size / 1.158 +
        ' ' +
        size / 0.44 +
        ';stroke-dashoffset:' +
        -Math.abs(size / 1.294) +
        ';stroke:' +
        colors[4] +
        ';'
      "
      :cx="size / 2"
      :cy="size / 2"
      :r="size / 2.29"
    />
  </svg>
</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      default: 220,
    },
    colors: {
      type: Array,
      default: () => [
        this.$store.state.logo[0],
        this.$store.state.logo[1],
        this.$store.state.logo[2],
        this.$store.state.logo[3],
        this.$store.state.logo[4],
      ],
    },
  },
  data() {
    return {
      active: false,
      finishing: false,
      maxDelay: 400, // 0.4s
      animationDuration: 3000,
      minimumAnimationDuration: 1000,
    }
  },
  mounted() {},
  methods: {
    finishedAnimation(evt) {
      // event will be triggered for each element being animatied in the container.
      //
      if (this.finishing) {
        return
      }
      this.finishing = true
      setTimeout(
        () => {
          this.active = false
          this.finishing = false
        },
        // to properly calculate the delay needed since first event
        // we need to total animation duration
        // the smallest animation duration, of the sub elements
        // and if there is a positive delay, we need the max from all sub elements.
        this.animationDuration - this.minimumAnimationDuration + this.maxDelay
      )
    },
    trigger() {
      if (!this.active) {
        this.active = true
      }
    },
  },
}
</script>

<style lang="scss">
/* 1. Style the SVG circles. */
.logo-loader circle {
  stroke-linecap: round;
  fill: none;
}

/* 2. Create the keyframe animation. We start at 50% so the circle will rotate back to its original position. */
@keyframes loader {
  0% {
    transform: rotate(-360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.logo-loader.play circle {
  animation-name: loader;
}
.logo-loader.play circle {
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  transform-origin: center center;
}
.logo-loader circle:nth-of-type(5) {
  animation-delay: -0.2s;
  animation-duration: 1s;
}

.logo-loader circle:nth-of-type(4) {
  animation-delay: -0.4s;
}

.logo-loader circle:nth-of-type(3) {
  animation-delay: -0.4s;
}

.logo-loader circle:nth-of-type(2) {
  animation-delay: 0s;
}
</style>
