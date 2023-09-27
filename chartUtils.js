
export function drawCircle(context, x, y, radius, color) {
  context.beginPath()
  context.arc(x, y, radius, 0, 2 * Math.PI)
  context.fillStyle = color
  context.fill()
}

export function drawLine(context, startX, startY, endX, endY, lineWidth, color) {
  context.beginPath()
  context.moveTo(startX, startY)
  context.lineTo(endX, endY)
  context.strokeStyle = color
  context.lineWidth = lineWidth
  context.stroke()
}