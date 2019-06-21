class Board {
  constructor(boardSize,sizeOfSingleCell){
    this.boardSize = boardSize
    this.sizeOfSingleCell = sizeOfSingleCell

    this.values = []

    for(var i = 0; i < this.boardSize; i += this.sizeOfSingleCell){
      for(var j = 0; j < this.boardSize; j += this.sizeOfSingleCell){

        this.values.push({
          'x' : i,
          'y' : j,
          'type' : 'Normal',
          'color' : ' grey',
          'index' : i * (this.boardSize/this.sizeOfSingleCell) + j
        })
      }
    }
  }

  getloc(){
    var a = []
    for(var i of this.values){
      if(i.type == 'respwan'){
        a.push([i.x,i.y])
      }
    }
    return a[Math.floor(Math.random()*a.length)];
  }

  show(){
    stroke('black')

    for(var i of this.values){
      fill(i.color)
      rect(i.x,i.y,this.sizeOfSingleCell,this.sizeOfSingleCell)
    }
  }

  clear(){
    for(var i of this.values){
      i.type = 'Normal'
      i.color = 'grey'
    }

    ossilators = []
    rotators = []
    coins = []
    deadcoins = []
    ossilatorCordinates = []
    rotatorcords = []
  }

  update(){
    for(var i of this.values){
      if (mouseIsPressed){
        if(collidePointRect(mouseX,mouseY,i.x,i.y,this.sizeOfSingleCell,this.sizeOfSingleCell)){
          i.type = mode
          i.color = modeColor
        }
      }
    }
  }
}
