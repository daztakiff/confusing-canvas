export function drawGrid(ctx, width, height) {
  console.log('drawGrid')
  let s = 28
  let nX = Math.floor(width / s) - 2
  let nY = Math.floor(height / s) - 2
  let pX = width - nX * s
  let pY = height - nY * s
  let pL = Math.ceil(pX / 2) - 0.5
  let pT = Math.ceil(pY / 2) - 0.5
  let pR = width - nX * s - pL
  let pB = height - nY * s - pT

  ctx.strokeStyle = 'lightgrey'
  ctx.beginPath()
  for (var x = pL; x <= width - pR; x += s) {
    ctx.moveTo(x, pT)
    ctx.lineTo(x, height - pB)
  }
  for (var y = pT; y <= height - pB; y += s) {
    ctx.moveTo(pL, y)
    ctx.lineTo(width - pR, y)
  }
  ctx.stroke()
}
