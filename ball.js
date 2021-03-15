class Ball{
    constructor(x, y, radius, angle) {
        var options = {
            
            'density':1.0,
            'frictionAir':0.007
        }
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}