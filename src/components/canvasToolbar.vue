<template>
  <div class="canvas-toolbar">
    <EditShapesDialog></EditShapesDialog>
    <v-btn color="surface-variant" text="Draw Circle" variant="flat"></v-btn>
    <v-btn color="surface-variant" text="Draw Square" variant="flat"></v-btn>
    <v-btn color="surface-variant" text="Clear All Shapes" variant="flat"></v-btn>
  </div>
</template>

<script>
import { drawAllShapes } from '../utils/drawShape'
import EditShapesDialog from './editShapesDialog.vue'

export default {
  components: {
    EditShapesDialog,
  },
  emits: ['drawShapes', 'editShapes', 'drawCircle', 'drawSquare', 'clearShapes'],
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  methods: {
    drawShapes() {
      pass
    },
    editShapes() {
      pass
    },
    drawCircle() {
      pass
    },
    drawSquare() {
      pass
    },
    clearShapes() {
      pass
    },
  },
}
</script>

<style scoped>
.canvas-toolbar {
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 10px;
}

.toolbar-button {
  height: 40;
  margin: 5px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}
</style>
