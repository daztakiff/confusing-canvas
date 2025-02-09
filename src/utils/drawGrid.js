export function drawGrid(ctx, width, height) {
  console.log('drawGrid')
  let s = 28
  let pL = s
  let pT = s
  let pR = s
  let pB = s

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
