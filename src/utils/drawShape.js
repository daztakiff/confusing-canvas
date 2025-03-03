
import { useShapeStore } from '../stores/shapeStore'

export function drawAllShapes(ctx) {
    const shapeStore = useShapeStore()
    shapeStore.getShapeList.forEach((shape) => {
      if (shape.type === 'circle') {
        drawCircle(ctx, shape.center, shape.radius, shape.color, shape.fill)
      } else if (shape.type === 'square') {
        drawSquare(ctx, shape.corner, shape.length, shape.color, shape.fill)
      }
    })
}


function drawSquare(ctx, point, length, color, fill = false) {
  console.log('drawSquare')
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.moveTo(point.x, point.y)
  ctx.lineTo(point.x + length, point.y)
  ctx.lineTo(point.x + length, point.y + length)
  ctx.lineTo(point.x, point.y + length)
  ctx.lineTo(point.x, point.y)
  finishShape(ctx, fill, color)
}

function drawCircle(ctx, center, radius, color, fill = false) {
  console.log('drawCircle')
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI)
  finishShape(ctx, fill, color)
}

function finishShape(ctx, fill, fillColor) {
  if (fill) {
    ctx.fillStyle = fillColor
    ctx.fill()
  } else {
    ctx.stroke()
  }
}

