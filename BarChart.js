export default class BarChart {
  #canvas
  #context
  #canvasPadding = 50
  #borderPadding = 5
  #chartAreaWidth
  #chartAreaHeight
  #chartAreaXpos
  #chartAreaYpos

  constructor(id) {
    this.#canvas = document.getElementById(id)
    this.#context = this.#canvas.getContext('2d')

    console.log(this.#canvas.width) // default: 300
    console.log(this.#canvas.height) // default: 150

    // default width of canvas is 300, change it 600
    this.#canvas.width = 600

    // default height of canvas is 150, change it to 300
    this.#canvas.height = 300

    this.#chartAreaWidth = this.#canvas.width - this.#canvasPadding * 2
    this.#chartAreaHeight = this.#canvas.height - this.#canvasPadding * 2

    console.log(this.#chartAreaWidth)
    console.log(this.#chartAreaHeight)

    this.#chartAreaXpos = this.#canvasPadding
    this.#chartAreaYpos = this.#canvasPadding

    this.#drawRectangle(this.#chartAreaXpos, this.#chartAreaYpos, this.#chartAreaWidth, this.#chartAreaHeight, '#ffffff')

    const title = 'Favorite season'
    // number of labels and number of data points must match
    const xlabels = ['Spring', 'Summer', 'Autumn', 'Winter']
    const data = [10, 20, 6, 2, 10, 10,40]
    const titleYAxis = 'Number of votes'

    const numberOfDataPoints = data.length
    console.log("Number of data points: " + numberOfDataPoints)

    this.#setTitle(title)
    
    this.#drawBorder(4, '#AAAAAA')

    
    this.#drawGrid()

    this.#drawXAxis('#000000')
    this.#drawYAxis('#000000') 


    this.#drawBars(data)
  }

  #setTitle(title){
    this.#context.fillStyle = "#333333"
    this.#context.font = "18px Arial"
    this.#context.fillText(title, this.#canvasPadding, this.#canvasPadding - 10)
  }

  #drawXAxis(color) {
    const lineWidth = 2;
    const startX = this.#chartAreaXpos
    const startY = this.#chartAreaYpos + this.#chartAreaHeight
    const endX = this.#chartAreaXpos + this.#chartAreaWidth
    const endY = this.#chartAreaYpos + this.#chartAreaHeight

    this.#drawLine(startX, startY, endX, endY, lineWidth, color);
  }

  #drawYAxis(color) {
    const lineWidth = 2;
    const startX = this.#chartAreaXpos
    const startY = this.#chartAreaYpos
    const endX = this.#chartAreaXpos
    const endY = this.#chartAreaYpos + this.#chartAreaHeight

    this.#drawLine(startX, startY, endX, endY, lineWidth, color);
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
      let y  = this.#chartAreaYpos + i * horicontalGridLineSpacing
      this.#drawLine(startX, y, endX, y, lineWidth, color);
    }

    // draw vertical lines
    const startY = this.#chartAreaYpos
    const endY = this.#chartAreaYpos + this.#chartAreaHeight
    for (let i = 0; i < numberOfVerticalGridLines; i++) {
      let x  = this.#chartAreaXpos + i * verticalGridlineSpacing
      this.#drawLine(x, startY, x, endY, lineWidth, color);
    }

  }

  #drawBars(data) {
    const barSidePadding = 10
    const barTopPadding = 20

    const numberOfDataPoints = data.length
    const maxValue = this.#getMaxValue(data)
    const barAreaWidth = this.#chartAreaWidth / numberOfDataPoints
    const scalingFactor = (this.#chartAreaHeight - barTopPadding) / maxValue
    
    const barWidth = barAreaWidth - barSidePadding * 2
    for (let i = 0; i < numberOfDataPoints; i++) {
      const x = this.#chartAreaXpos + i * barAreaWidth + barSidePadding
      const y = this.#chartAreaYpos + this.#chartAreaHeight - data[i] * scalingFactor
      const barHeight = scalingFactor * data[i]
   
      this.#drawBar(x, y, barWidth, barHeight, 'rgba(34, 145, 23, 0.5)');
    }
  }

  #getMaxValue(data) {
    return Math.max(...data)
  }

  #drawDot(x, y, radius) {
    this.#context.beginPath()
    this.#context.arc(x, y, radius, 0, 2 * Math.PI)
    this.#context.fillStyle = '#346823'
    this.#context.fill()
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
    this.#drawLine(margin, margin, this.#canvas.width - margin, margin, lineWidth, color)
    this.#drawLine(margin, margin, margin, this.#canvas.height - margin, lineWidth, color)
    this.#drawLine(margin, this.#canvas.height - margin, this.#canvas.width - margin, this.#canvas.height - margin, lineWidth, color)
    this.#drawLine(this.#canvas.width - margin, margin, this.#canvas.width - margin, this.#canvas.height - margin, lineWidth, color)
  }

  #drawLine(startX, startY, endX, endY, lineWidth, color) {
    this.#context.beginPath()
    this.#context.moveTo(startX, startY)
    this.#context.lineTo(endX, endY)
    this.#context.strokeStyle = color
    this.#context.lineWidth = lineWidth
    this.#context.stroke()
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



