export default class BarChart {
  #canvas
  #context

  constructor(canvas) {
    this.#canvas = canvas;
    this.#context = canvas.getContext('2d');

    console.log(this.#canvas.width) // 300
    console.log(this.#canvas.height) // 150

    this.#drawDot(5,5, 5);
    this.#drawDot(5,100, 5);
    this.#drawDot(100,100, 5);
    this.#drawDot(100,5, 5);

  }

  #drawDot(x, y, size) {
    this.#context.beginPath();
    this.#context.arc(x, y, size, 0, 2 * Math.PI);
    this.#context.fillStyle = "#346823";
    this.#context.fill();
  }

}



