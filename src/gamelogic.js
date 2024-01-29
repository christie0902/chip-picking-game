class Chip {
  constructor(number, color) {
    this.number = number;
    this.color = color;
  }
  render() {
    const chip = document.querySelector("p");
    chip.textContent = this.number;
    chip.className = `.chip .${this.color}`;
  }
  remove() {
    this.style.display = "none";
  }
  click() {
    this.remove();
  }
}

class Game {
  constructor() {}
  addChip(x, y) {}
}
