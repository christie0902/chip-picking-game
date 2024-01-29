const getRandom = (max = 1, min = 0) => {
  return Math.ceil(Math.random() * (max-min)) + min ;
}

const playScreen = document.querySelector('.playScreen');
let score = 0;
let chipCount=0;

class Game {
  constructor(numberOfChips) {
    this.chipNum = numberOfChips || 5; //default number of chips if not specified
    chipCount = this.chipNum;
  }

  start(){
    for (let i =0; i < this.chipNum; i++) {
      this.addChip(getRandom(5),getRandom(1000, 200),getRandom(1000, 200));
  }
  }
  addChip(value, x, y) {
      const chip = new Chip(value, x, y);
      chip.render();
  }

  scoreCalc(value) {
    score+=value;
    this.showScore();
  }

  showScore () {
    const lastScore = document.querySelector('.scoreValue');
    lastScore.innerText = score;
  }

  endGame () {
    location.reload();
  }
}


class Chip{
  constructor(value,x,y) {
    this.chipCount = chipCount;
    console.log(this.chipCount);
    this.value = value;
    this.x = x;
    this.y = y;
    this.chipDisplay = undefined;
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
    this.chipDisplay = document.createElement('div')
    this.chipDisplay.style.top= this.y +"px";
    this.chipDisplay.style.left = this.x + "px";
    playScreen.appendChild(this.chipDisplay);
    this.chipDisplay.textContent = this.value;
    this.chipDisplay.classList.add("chip", this.getColor(this.value));
    this.chipDisplay.addEventListener("click", () => this.click());
  }


  remove() {
    playScreen.removeChild(this.chipDisplay);
    chipCount--
    console.log(chipCount);
    if (chipCount=== 0) {
      newGame.endGame ();
    }
  }
  click() {
    newGame.scoreCalc(this.value)
    this.remove();
  }
}

let newGame = new Game(6);
newGame.start()
