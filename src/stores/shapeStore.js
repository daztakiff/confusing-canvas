import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Circle } from '../models/Circle'
import { Square } from '../models/Square'

export const useShapeStore = defineStore('shapeStore', {
  state: () => ({ shapeList: [] }),
  getters: {
    getShapeList: (state) => state.shapeList,
  },
  actions: {
    addCircle(center, radius, color, fill = false) {
      this.shapeList.push(new Circle(center, radius, color, fill))
    },
    addSquare(corner, length, color, fill = false) {
      this.shapeList.push(new Square(corner, length, color, fill))
    },
    addSampleShapes() {
      this.addCircle({ x: 50, y: 50 }, 20, 'red')
      this.addCircle({ x: 150, y: 200 }, 100, 'blue', true)
      this.addSquare({ x: 200, y: 200 }, 75, 'purple')
    },
    clearShapes() {
      this.shapeList = []
    },
  },
})