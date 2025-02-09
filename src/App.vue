<template>
  <button class="drawButton" @click="drawGrid" >Draw Grid</button>
  <canvas class="gridCanvas" :width="width" :height="height" ref="gridCanvas"></canvas>
</template>

<script>
import { drawGrid } from './utils/drawGrid'

export default {
  props: ['width', 'height'],
  methods: {
    setupGrid() {
      const canvas = this.$refs.gridCanvas;
      const canvasContext = canvas.getContext('2d');
      drawGrid(canvasContext, this.width, this.height);
    },
  },
  mounted() {
    this.setupGrid()
  },
}
</script>

<style scoped>
.gridCanvas {
  position: relative !important;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}
.drawButton {
  height: 40;
  margin: 5px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}
</style>
