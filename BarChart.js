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

    this.#drawRectangle(this.#chartAreaXpos, this.#chartAreaYpos, this.#chartAreaWidth, this.#chartAreaHeight, '#eeeeee')

    const title = 'Favorite season'
    // number of labels and number of data points must match
    const labels = ['Spring', 'Summer', 'Autumn', 'Winter']
    const data = [2, 4, 7, 10]
    
    const numberOfDataPoints = data.length
    console.log("Number of data points: " + numberOfDataPoints)

    this.#context.fillStyle = "#333333"
    this.#context.font = "18px Arial"
    this.#context.fillText(title, this.#canvasPadding, 30)

    this.#drawBorder(4, '#AAAAAA')

    const barPadding = 60
    const barAreaWidth = this.#chartAreaWidth / numberOfDataPoints
    const barWidth = barAreaWidth - barPadding

    const barXpos = this.#chartAreaXpos + (barPadding/2)

    const barYpos1 = this.#chartAreaYpos + this.#chartAreaHeight - 70
    const barYpos2 = this.#chartAreaYpos + this.#chartAreaHeight - 90
    const barYpos3 = this.#chartAreaYpos + this.#chartAreaHeight - 80
    const barYpos4 = this.#chartAreaYpos + this.#chartAreaHeight - 170
    
    
    const barHeights = []

    // draw 4 bars
    this.#drawBar(barXpos, barYpos1, barWidth, 70, 'rgba(255, 99, 132, 0.6');
    this.#drawBar(barXpos + 1 * barAreaWidth, barYpos2, barWidth, 90, 'rgba(54, 162, 235, 0.6)');
    this.#drawBar(barXpos + 2 * barAreaWidth, barYpos3, barWidth, 80, 'rgba(255, 206, 86, 0.6)');
    this.#drawBar(barXpos + 3 * barAreaWidth, barYpos4, barWidth, 170, 'rgba(75, 192, 192, 0.6)');

    // draw y axis
    // this.#drawLine(50, 50, 50, this.#canvas.height - 30, 2, '#000000');

    //draw x axis
    // this.#drawLine(50, this.#canvas.height - 30, this.#canvas.width - 40, this.#canvas.height - 30, 2, '#000000');


  }

  #drawDot(x, y, radius) {
    this.#context.beginPath();
    this.#context.arc(x, y, radius, 0, 2 * Math.PI);
    this.#context.fillStyle = '#346823';
    this.#context.fill();
  }

  #drawBar(posX, posY, width, height, color) {
    this.#drawRectangle(posX, posY, width, height, color);
    this.#drawOutLinedRectangle(posX, posY, width, height, color);
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



