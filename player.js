class player{
  constructor(x,y,s){
    this.pos = createVector(x,y)
    this.speed = s
    this.initialx = x
    this.initialy = y
  }

  show(){
    fill('pink')
    rect(this.pos.x,this.pos.y,size,size)
  }

  collusion(){
    for(i of board.values){
      if(collideRectRect(i.x,i.y,size,size,this.pos.x,this.pos.y,size,size)){
        if(i.type == 'Dead'){
           this.pos = createVector(this.initialx,this.initialy)
           for(var m of deadcoins){
             coins.push(m)
           }
        }
        if(i.type == 'finish'){
          if(coins.length <= 0){
            print('you won')
          }
        }
        if(i.type == 'spawn'){
          this.initialx = i.x
          this.initialy = i.y
          deadcoins = []
        }
      }
    }
    for(i of rotators){
      for(j of i.nodes){
        k = j.getcords()
        if(collideRectCircle(this.pos.x,this.pos.y,size,size,k[0],k[1],size)){
          this.pos = createVector(this.initialx,this.initialy)
          for(var m of deadcoins){
            coins.push(m)
          }
        }
      }
    }
    for(i of ossilators){
      if(collideRectCircle(this.pos.x,this.pos.y,size,size,i.pos.x,i.pos.y,size)){
        this.pos = createVector(this.initialx,this.initialy)
        for(var m of deadcoins){
          coins.push(m)
        }
      }
    }

    for(var  i of coins){
      if(collideRectCircle(this.pos.x,this.pos.y,size,size,i[0],i[1],size)){
        var a = coins.splice(coins.indexOf(i),1)
        for(var j of a){
          deadcoins.push(j)
        }
      }
    }
  }

  update(){
    if(keyIsPressed){
        if(key == 'w'){
          this.pos.y -= this.speed
        }
        if(key == 's'){
          this.pos.y += this.speed
        }
        if(key == 'd'){
          this.pos.x += this.speed
        }
        if(key == 'a'){
          this.pos.x -= this.speed
        }
      }
  }
}
