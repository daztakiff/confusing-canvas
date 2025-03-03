<template>
  <canvas class="gridCanvas" :width="width" :height="height" ref="canvasRef"> </canvas>
  <canvasToolbar ctx="context" :shapeStore="shapeStore"></canvasToolbar>
</template>

<script>
import { ref, onMounted } from 'vue'
import canvasToolbar from './components/canvasToolbar.vue'
import { drawGrid } from './utils/drawGrid'
import { useShapeStore } from './stores/shapeStore'
import { drawAllShapes } from './utils/drawShape'

export default {
  components: {
    canvasToolbar,
  },
  props: ['width', 'height'],
  setup(props) {
    const canvasRef = ref(null)
    const shapeStore = useShapeStore()
    shapeStore.addSampleShapes()

    onMounted(() => {
      const canvas = canvasRef.value
      const context = canvas.getContext('2d')
      drawGrid(context, props.width, props.height)
      shapeStore.addSampleShapes()
      drawAllShapes(context)
      canvas
    })
    return {
      canvasRef,
    }
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
  position: absolute;
  bottom: 10px;
  left: 10px;
  height: 40;
  margin: 5px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}
</style>
