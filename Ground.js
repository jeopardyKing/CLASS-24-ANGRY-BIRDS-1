class Ground{
    constructor(x,y,width,height){
    var Groundprop={
        'isStatic' :true
    }

    this.body=Bodies.rectangle(x,y,width,height,Groundprop);
    this.width=width;
    this.height=height;
    World.add(Aworld,this.body)
    }
    
    display(){
        var pos=this.body.position;

        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
    }
}