export default class BarChart {
  #canvas
  #context
  #canvasPadding = 20

  constructor(canvas) {
    this.#canvas = canvas;
    this.#context = canvas.getContext('2d');

    console.log(this.#canvas.width); // default: 300
    console.log(this.#canvas.height); // default: 150

    // default width of canvas is 300, change it 600
    this.#canvas.width = 600;

    // default height of canvas is 150, change it to 300
    this.#canvas.height = 300;

    this.#drawQuaterCircle(5, 5, 5, '#346823', 2);
    this.#drawQuaterCircle(595, 5, 5, '#346823', 1);
    this.#drawQuaterCircle(595, 295, 5, '#346823', 4);
    this.#drawQuaterCircle(5, 295, 5, '#346823', 3);

    // draw test line connecting the dots
    this.#drawLine(5, 5, 595, 5, 10);
    this.#drawLine(5, 5, 5, 295, 10);
    this.#drawLine(5, 295, 595, 295, 10);
    this.#drawLine(595, 5, 595, 295, 10);

    this.#drawQuaterCircle();

    // draw y axis
    this.#drawLine(50, 50, 50, this.#canvas.height - 30, 2);

    //draw x axis
    this.#drawLine(50, this.#canvas.height - 30, this.#canvas.width - 40, this.#canvas.height - 30, 2);

    // draw 4 bars
    this.#drawRectangle(100, this.#canvas.height - 100, 50, 70);
    this.#drawRectangle(200, this.#canvas.height - 120, 50, 90);
    this.#drawRectangle(300, this.#canvas.height - 110, 50, 80);
    this.#drawRectangle(400, this.#canvas.height - 200, 50, 170);

    // draw some rectangle for the border of chart
    this.#drawOutLinedRectangle(this.#canvasPadding, this.#canvasPadding, this.#canvas.width - this.#canvasPadding * 2, this.#canvas.height - this.#canvasPadding * 2);
  }

  #drawDot(x, y, radius) {
    this.#context.beginPath();
    this.#context.arc(x, y, radius, 0, 2 * Math.PI);
    this.#context.fillStyle = '#346823';
    this.#context.fill();
  }

  #drawLine(startX, startY, endX, endY, lineWidth) {
    this.#context.beginPath();
    this.#context.moveTo(startX, startY);
    this.#context.lineTo(endX, endY);
    this.#context.strokeStyle = "#346823";
    this.#context.lineWidth = lineWidth;
    this.#context.stroke();
  }

  #drawRectangle(posX, posY, width, height) {
    this.#context.fillStyle = this.#getRandomColor();
    this.#context.fillRect(posX, posY, width, height);
  }

  #drawOutLinedRectangle(posX, posY, width, height) {
    this.#context.fillStroke = this.#getRandomColor();
    this.#context.strokeRect(posX, posY, width, height);
  }

  #getRandomColor() {
    const hexDigits = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexDigits[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  /**
   * Draws a quarter circle for given quadrant. 
   * 1st quadrant means the top-right part of circle, the 2nd quadrant is the top-left part of the circle, 3rd quadrant is the bottom left part of the circle, and 4th quadrant is the bottom right part of the circle.
   *
   * @param {number} quadrant - The quadrant for which to draw the quarter circle (1, 2, 3 , or 4).
   * @param {number} xPos - The x-coordinat for the center of quarter circle.
   * @param {number} yPos - The y-coordint for the center of quarter circle.
   * @param {number} radius - The radius of the quarter circle.
   * @param {string} color - The fill color for the quarter circle.
   */
  #drawQuaterCircle(xPos, yPos, radius, color, quadrant) {
    this.#context.beginPath();
    // determine which quarter circle to draw
    if (quadrant === 1) {
      this.#context.arc(xPos, yPos, radius, (Math.PI / 2) * 3, 2 * Math.PI);
    } else if (quadrant === 2) {
      this.#context.arc(xPos, yPos, radius, Math.PI, (Math.PI / 2) * 3);
    } else if (quadrant === 3) {
      this.#context.arc(xPos, yPos, radius, Math.PI / 2, Math.PI);
    } else if (quadrant === 4) {
      this.#context.arc(xPos, yPos, radius, 0, Math.PI / 2);
    }
    this.#context.lineTo(xPos, yPos);
    this.#context.closePath();
    this.#context.fillStyle = color;
    this.#context.fill();
  }

}



