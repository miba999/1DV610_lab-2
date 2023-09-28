import { drawLine, drawCircle } from './chartUtils.js'

export default class BarChart {
  #canvas
  #context

  #canvasTopPadding = 60
  #canvasBottomPadding = 70
  #canvasRightPadding = 20
  #canvasLeftPadding = 100
  #barColor = 'rgba(34, 145, 23, 0.5)'

  #chartAreaWidth
  #chartAreaHeight
  #chartAreaXpos
  #chartAreaYpos
  #data

  constructor(id) {
    this.#canvas = document.getElementById(id)
    this.#context = this.#canvas.getContext('2d')

    // set default height and width
    this.setWidth(600)
    this.setHeight(300)
    
    this.#drawChart()
  }

  #drawXAxisScale(data) {
    const maxValue = this.#getMaxValue(data)
    const scalingFactor = this.#chartAreaHeight / maxValue
    const scaleLineWidth = 10
    const startX = this.#chartAreaXpos - scaleLineWidth
    const endX = this.#chartAreaXpos

    for (let i = 0; i <= maxValue; i = i + 5) {
      // draw scale line
      const y = this.#chartAreaYpos + this.#chartAreaHeight - (i * scalingFactor)
      drawLine(this.#context, startX, y, endX, y, 2, '#000000')

      // draw value of scale
      this.#context.fillStyle = "#000000"
      this.#context.font = "12px Arial"
      this.#context.textAlign = 'center'
      this.#context.fillText(i, this.#chartAreaXpos - scaleLineWidth - 10, y + 4)
    }
  }

  #drawHorizontalLines(data) {
    const maxValue = this.#getMaxValue(data)
    const scalingFactor = this.#chartAreaHeight / maxValue
   
    const startX = this.#chartAreaXpos 
    const endX = this.#chartAreaXpos + this.#chartAreaWidth

    for (let i = 0; i <= maxValue; i = i + 5) {
      const y = this.#chartAreaYpos + this.#chartAreaHeight - (i * scalingFactor)
      drawLine(this.#context, startX, y, endX, y, 2, '#CCCCCC')
    }
  }

  #drawChart() {
    this.#setChartAreaOrigin()
    this.#setChartAreaWidth()
    this.#setChartAreaHeight()
    this.#drawBorder(10, '#DDDDDD')
    this.#drawXAxis('#000000')
    this.#drawYAxis('#000000')
    if (typeof this.#data !== 'undefined') {
      this.#drawXAxisScale(this.#data)
      this.#drawHorizontalLines(this.#data)
      this.#drawBars(this.#data, this.#barColor)
    }
  }

  setColor(color) {
    this.#barColor = color
    this.#drawChart()
  }

  setHeight(newHeight) {
    this.#canvas.height = newHeight
    this.#drawChart()
  }

  setWidth(newWidth) {
    this.#canvas.width = newWidth
    this.#drawChart()
  }

  setTitle(title) {
    const x = this.#canvasLeftPadding
    const y = this.#canvasTopPadding - 20
    this.#drawTitle(title, x, y)
  }

  setXAxisLabel(label) {
    const x = this.#chartAreaXpos + this.#chartAreaWidth / 2
    const y = this.#chartAreaYpos + this.#chartAreaHeight + this.#canvasBottomPadding * 2 / 3
    this.#drawXAxisLabel(label, x, y)
  }

  setYAxisLabel(label) {
    const x = this.#canvasLeftPadding / 5 * 2
    const y = this.#chartAreaYpos + (this.#chartAreaHeight / 2)
    this.#drawYAxisLabel(label, x, y)
  }

  #drawXAxisLabel(label, x, y) {
    this.#context.fillStyle = "#000000"
    this.#context.font = "16px Arial"
    this.#context.textAlign = 'center'
    this.#context.fillText(label, x, y)
  }

  #drawYAxisLabel(label, x, y) {
    this.#context.save()
    this.#context.translate(x, y)
    this.#context.rotate(- Math.PI / 2)
    this.#context.fillStyle = "#000000"
    this.#context.font = "16px Arial"
    this.#context.textAlign = 'center'
    this.#context.fillText(label, 0, 0)
    this.#context.restore()
  }

  #setChartAreaOrigin() {
    this.#chartAreaXpos = this.#canvasLeftPadding
    this.#chartAreaYpos = this.#canvasTopPadding
  }

  #setChartAreaWidth() {
    this.#chartAreaWidth = this.#canvas.width - this.#canvasLeftPadding - this.#canvasRightPadding
  }

  #setChartAreaHeight() {
    this.#chartAreaHeight = this.#canvas.height - this.#canvasTopPadding - this.#canvasBottomPadding
  }

  setData(data) {
    this.#data = data
    this.#drawChart()
  }

  setCategories(xLabels) {
    const barAreaWidth = this.#chartAreaWidth / xLabels.length
    const y = this.#chartAreaYpos + this.#chartAreaHeight + 16

    for (let i = 0; i < xLabels.length; i++) {
      let x = this.#chartAreaXpos + (barAreaWidth / 2) + i * barAreaWidth
      this.#drawCategory(xLabels[i], x, y)
    }
  }

  #drawCategory(text, x, y) {
    this.#context.fillStyle = "#000000"
    this.#context.font = "12px Arial"
    this.#context.textAlign = 'center'
    this.#context.fillText(text, x, y)
  }

  #drawTitle(title, x, y) {

    this.#context.fillStyle = "#333333"
    this.#context.font = "18px Arial"
    this.#context.fillText(title, x, y)
  }

  #drawXAxis(color) {
    const lineWidth = 2;
    const startX = this.#chartAreaXpos
    const startY = this.#chartAreaYpos + this.#chartAreaHeight
    const endX = this.#chartAreaXpos + this.#chartAreaWidth
    const endY = this.#chartAreaYpos + this.#chartAreaHeight

    drawLine(this.#context, startX, startY, endX, endY, lineWidth, color);
  }

  #drawYAxis(color) {
    const lineWidth = 2;
    const startX = this.#chartAreaXpos
    const startY = this.#chartAreaYpos
    const endX = this.#chartAreaXpos
    const endY = this.#chartAreaYpos + this.#chartAreaHeight

    drawLine(this.#context, startX, startY, endX, endY, lineWidth, color);
  }

  #drawGrid() {
    const color = '#DDDDDD'
    const lineWidth = 2
    const numberOfHorizontalGridLines = 5
    const numberOfVerticalGridLines = 6

    const horicontalGridLineSpacing = this.#chartAreaHeight / numberOfHorizontalGridLines
    const verticalGridlineSpacing = this.#chartAreaWidth / numberOfVerticalGridLines

    // draw horizontal lines
    const startX = this.#chartAreaXpos
    const endX = this.#chartAreaXpos + this.#chartAreaWidth
    for (let i = 0; i < numberOfHorizontalGridLines; i++) {
      let y = this.#chartAreaYpos + i * horicontalGridLineSpacing
      drawLine(this.#context, startX, y, endX, y, lineWidth, color);
    }

    // draw vertical lines
    const startY = this.#chartAreaYpos
    const endY = this.#chartAreaYpos + this.#chartAreaHeight
    for (let i = 0; i < numberOfVerticalGridLines; i++) {
      let x = this.#chartAreaXpos + i * verticalGridlineSpacing
      drawLine(this.#context, x, startY, x, endY, lineWidth, color);
    }

  }

  #drawBars(data, color) {
    const barSidePadding = 10

    const numberOfDataPoints = data.length
    const maxValue = this.#getMaxValue(data)
    const barAreaWidth = this.#chartAreaWidth / numberOfDataPoints
    const scalingFactor = this.#chartAreaHeight / maxValue

    const barWidth = barAreaWidth - barSidePadding * 2
    for (let i = 0; i < numberOfDataPoints; i++) {
      const x = this.#chartAreaXpos + i * barAreaWidth + barSidePadding
      const y = this.#chartAreaYpos + this.#chartAreaHeight - data[i] * scalingFactor
      const barHeight = scalingFactor * data[i]

      this.#drawBar(x, y, barWidth, barHeight, color);
    }
  }

  #getMaxValue(data) {
    return Math.max(...data)
  }

  #drawBar(posX, posY, width, height, color) {
    this.#drawRectangle(posX, posY, width, height, color)
    this.#drawOutLinedRectangle(posX, posY, width, height, color)
  }

  #drawRectangle(posX, posY, width, height, color) {
    this.#context.fillStyle = color
    this.#context.fillRect(posX, posY, width, height)
  }

  #drawOutLinedRectangle(posX, posY, width, height, color) {
    this.#context.strokeStyle = color
    this.#context.lineWidth = 2
    this.#context.strokeRect(posX, posY, width, height)
  }

  #getRandomColor() {
    const hexDigits = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color += hexDigits[Math.floor(Math.random() * 16)]
    }
    return color
  }

  #drawBorder(lineWidth, color) {
    // draw corners
    const margin = lineWidth / 2
    this.#drawQuaterCircle(margin, margin, lineWidth / 2, color, 2)
    this.#drawQuaterCircle(this.#canvas.width - margin, margin, lineWidth / 2, color, 1)
    this.#drawQuaterCircle(this.#canvas.width - margin, this.#canvas.height - margin, lineWidth / 2, color, 4)
    this.#drawQuaterCircle(margin, this.#canvas.height - margin, lineWidth / 2, color, 3)

    // draw line connecting the corneres
    drawLine(this.#context, margin, margin, this.#canvas.width - margin, margin, lineWidth, color)
    drawLine(this.#context, margin, margin, margin, this.#canvas.height - margin, lineWidth, color)
    drawLine(this.#context, margin, this.#canvas.height - margin, this.#canvas.width - margin, this.#canvas.height - margin, lineWidth, color)
    drawLine(this.#context, this.#canvas.width - margin, margin, this.#canvas.width - margin, this.#canvas.height - margin, lineWidth, color)
  }

  /**
   * Draws a quarter circle for given quadrant. 
   * 1st quadrant means the top-right part of circle, the 2nd quadrant is the top-left part of the circle, 3rd quadrant is the bottom left part of the circle, and 4th quadrant is the bottom right part of the circle.
   *
   * @param {number} xPos - The x-coordinat for the center of quarter circle.
   * @param {number} yPos - The y-coordint for the center of quarter circle.
   * @param {number} radius - The radius of the quarter circle.
   * @param {string} color - The fill color for the quarter circle.
   * @param {number} quadrant - The quadrant for which to draw the quarter circle (1, 2, 3 , or 4).
   */
  #drawQuaterCircle(xPos, yPos, radius, color, quadrant) {
    this.#context.beginPath()
    // determine which quarter circle to draw
    if (quadrant === 1) {
      this.#context.arc(xPos, yPos, radius, (Math.PI / 2) * 3, 2 * Math.PI)
    } else if (quadrant === 2) {
      this.#context.arc(xPos, yPos, radius, Math.PI, (Math.PI / 2) * 3)
    } else if (quadrant === 3) {
      this.#context.arc(xPos, yPos, radius, Math.PI / 2, Math.PI)
    } else if (quadrant === 4) {
      this.#context.arc(xPos, yPos, radius, 0, Math.PI / 2)
    }
    this.#context.lineTo(xPos, yPos)
    this.#context.closePath()
    this.#context.fillStyle = color
    this.#context.fill()
  }

}



