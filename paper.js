class Paper{
    constructor(x,y){
        var option={
            restitution:0.3,
            density:1.2,
            friction:0.5,
            isStatic:false
        }
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(x,y,30,option);
        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      fill("pink");
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,30,30)

    }
}