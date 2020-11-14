class launcher{
    constructor(bodyA,pointB){
        var option = {
            bodyA: bodyA,
            pointB: pointB,
            length: 300,
            stifness: 1
            
        }
     this.body = Constraint.create(option)
    this.pointB = pointB
    
    World.add(world,this.body)
    }
    display(){
    var pointA = this.body.bodyA.position
    var pointB = this.pointB
    
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    



    
    }

}