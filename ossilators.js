class Osilator {
  constructor(x1,y1,x2,y2,s,xvil,yvil,color){
    this.pos = createVector((x1 + x2)/2,(y1 + y2)/2)
    this.vil = createVector(xvil,yvil)

    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2

    if(xvil == 0){
      if(y1 > y2){
        this.vil.mult(-1)
      }
    }
    if(xvil != 0){
      if(x1 > x2){
        this.vil.mult(-1)
      }
    }

    this.resetvil = this.vil


    this.size = s

    this.color = color
    this.initailxvil = xvil
    this.initailyvil = yvil
  }

  show(){
    fill(this.color)
    ellipse(this.pos.x,this.pos.y,this.size)
  }

  update(){
    this.pos.add(this.vil)

    if(this.initailxvil == 0){
      if(this.y2 > this.y1){
        if(this.pos.y > this.y2 || this.pos.y < this.y1){
          this.vil.mult(-1)
        }
      } else {
        if(this.pos.y < this.y2 || this.pos.y > this.y1){
          this.vil.mult(-1)
        }
      }
    }
    if(this.initailxvil != 0){
      if(this.x2 > this.x1){
        if(this.pos.x > this.x2 || this.pos.x < this.x1){
          this.vil.mult(-1)
        }
      } else {
        if(this.pos.x < this.x2 || this.pos.x > this.x1){
          this.vil.mult(-1)
        }
      }
    }

  }

  start(){
    this.pos = createVector(this.x1,this.y1)
    this.vil = this.resetvil
  }
}

function makeOssilator(x,y){
  ossilatorCordinates = unique(ossilatorCordinates)

  if(ossilatorCordinates.length == 2){

    start = ossilatorCordinates[0]
    end = ossilatorCordinates[1]

    ossilators.push(new Osilator(start[0],start[1],end[0],end[1],size,x,y,'red'))

    ossilatorCordinates = []
  }
}




function unique(a){
  b = [a[0]]
  for (i of a){
    k = false
    for (j of b){
      if (i[0] == j[0] && i[1] == j[1]){
        k = true
      }
    }
    if (k == false){
      b.push(i)
    }
  }
  return b
}
