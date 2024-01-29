const getRandom = (max = 1, min = 0) => {
  return Math.ceil(Math.random() * (max-min)) + min ;
}

const playScreen = document.querySelector('.playScreen');
let score = 0;

class Game {
  constructor(numberOfChips) {
    this.chipNum = numberOfChips || 5; //default number of chips if not specified
  }

  start(){
    for (let i =0; i < this.chipNum; i++) {
      this.addChip(getRandom(5),getRandom(1000, 200),getRandom(1000, 200))
    }
  }

  addChip(value, x, y) {
      const chip = new Chip(value, x,y);
      chip.render();
  }
  scoreCalc(value){
    score+=value;
    this.showScore();
    
  }

  showScore () {
    const lastScore = document.querySelector('.scoreValue');
    lastScore.innerText = score;
  }

}

class Chip extends Game {
  constructor(value,x,y) {
    super();
    this.value = value;
    this.x = x;
    this.y = y;

  }

  getColor(value){
    switch (value) {
      case 1:
        return  "green";
      case 2:
        return "pink";
      case 3:
        return "blue";
      case 4:
        return "red";
      case 5:
        return "yellow";
    }
  }

  render() {
    const chip = document.createElement('div')
    chip.style.top= this.y +"px";
    chip.style.left = this.x + "px";
    playScreen.appendChild(chip);
    chip.textContent = this.value;
    chip.classList.add("chip", this.getColor(this.value));
    chip.addEventListener("click", this.click)
  }


  remove() {
    this.style.display = "none";
  }
  click() {
    super.scoreCalc(this.value)
    this.remove();
  }
}

let newGame = new Game(6);
newGame.start()
