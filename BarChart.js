export default class BarChart {
  #canvas
  #context

  constructor(canvas) {
    this.#canvas = canvas;
    this.#context = canvas.getContext('2d');

    console.log(this.#canvas.width); // default: 300
    console.log(this.#canvas.height); // default: 150

    // default width of canvas is 300, change it 600
    this.#canvas.width = 600;

    // default height of canvas is 150, change it to 300
    this.#canvas.height = 300;

    // draw a test dot in each corner of canvas
    this.#drawDot(5, 5, 5);
    this.#drawDot(5, 295, 5);
    this.#drawDot(595, 295, 5);
    this.#drawDot(595, 5, 5);
  }

  #drawDot(x, y, size) {
    this.#context.beginPath();
    this.#context.arc(x, y, size, 0, 2 * Math.PI);
    this.#context.fillStyle = "#346823";
    this.#context.fill();
  }

}



