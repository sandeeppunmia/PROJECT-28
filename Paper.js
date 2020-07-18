class Ball {
    constructor(x,y) {
      var options = {
        isStatic:false,
        restitution:0.8,
        friction:0,
        density:0.5
      }
      this.body = Bodies.circle(x,y,25,options);
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,70,70);    
       pop();
    }
  }
  