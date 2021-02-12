class Log{
    constructor(x,y,height,angle){
        //creating variable for the propert 
        var Boxprop={
            'restitution' : 0.8 ,
            'friction' : 1,
            'density' : 1 
                }

    //creating body
    this.body=Bodies.rectangle(x,y,20,height,Boxprop)
    this.width=20;
    this.height=height;
    Matter.Body.setAngle(this.body,angle);

    //adding this.body to the world 
    World.add(Aworld,this.body)

    }

    display(){
        //namespacing this.body.position as pos
        var pos=this.body.position;
        var angle=this.body.angle;
        
        //push tells that the setting should start
        push();
        //translate should always be before rotate 
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("brown")
        fill(0);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        //pop tells that settings should halt
        pop();
    }
}