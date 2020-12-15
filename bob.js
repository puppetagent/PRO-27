class Bob {

    constructor (x,y,height,width) {

        var options ={
            isStatic: false,
            restitution: 0.8,
            friction: 0.04,
        }
            this.body = Bodies.circle(x,y,20,options);
            this.width = 20;
            this.height = 20;
              
            World.add(world, this.body);
            }
    display(){
            var pos =this.body.position;
//pos.x = mouseX;
//pos.y = mouseY;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            ellipseMode(RADIUS);
            strokeWeight(3);
            stroke ("blue");
            fill ("red");
            ellipse(0, 0, this.width, this.height);
            pop();
            }
          
}
