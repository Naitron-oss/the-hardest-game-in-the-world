var board;
var mode = 'Normal'
var modeColor = 'grey'

var sel;

var coins = []
var deadcoins = []

var size = 10
var ossilators = []
var ossilatorCordinates = []

var rotators = []
var rotatorcords = []

var p
var gameStarted = false

function setup(){
  createCanvas(500,500);

  board = new Board(width,size)

  sel = createSelect();
  sel.position(156,66);
  sel.option('1');
  sel.option('2');
  sel.option('3');
  sel.option('4');
  sel.option('5');
  sel.option('6');
  sel.option('7');
  sel.option('8');
  sel.option('9');
  sel.option('10');

}


function draw(){
  board.show()
  board.update()

  if(gameStarted){
    p.show()
    p.update()
    p.collusion()
  }

  for(var i of coins){
    stroke('black')
    fill('yellow')
    ellipse(i[0],i[1],size)
  }

  if(mode == 'rotators'){
    if(mouseIsPressed){
      if(mouseX > 0 && mouseX < width){
        if(mouseY > 0 && mouseY < height){
          rotatorcords.push([mouseX,mouseY])
        }
      }
    }
  }

  if(mode == 'coins'){
    if(mouseIsPressed){
      if(mouseX > 0 && mouseX < width){
        if(mouseY > 0 && mouseY < height){
          coins.push([mouseX,mouseY])
        }
      }
    }
  }

  if(mode == 'ossilators'){
    if(mouseIsPressed){
      if(mouseX > 0 && mouseX < width){
        if(mouseY > 0 && mouseY < height){
          ossilatorCordinates.push([mouseX,mouseY])
        }
      }
    }
  }

  for(var ossilator of ossilators){
    ossilator.show()
    ossilator.update()
  }

  for(var r of rotators){
    r.show()
    r.update()
  }
}

function startgame(){
  for(var ossilator of ossilators){
    ossilator.start()
  }

  loc = board.getloc()
  p = new player(loc[0],loc[1],6)

  gameStarted = true
}
