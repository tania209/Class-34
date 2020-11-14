
   class ball{
    constructor(x,y,radius){
        var option = {
            restitution: 0.8,
            frictionAir: 0.05,
            density: 1
            
        }
     this.body = Bodies.circle(x,y,radius,option)
    this.radius = radius
    World.add(world,this.body)
    }
    display(){
    var pos = this.body.position
    var angle = this.body.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(CENTER)
    fill("purple")
    ellipse(0,0,this.radius,this.radius)
    pop();

    
    }

}