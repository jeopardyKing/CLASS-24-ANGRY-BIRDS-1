class Pig{
    constructor(x,y){
        //creating variable for the property
        var Boxprop={
            'restitution' : 0.8,
            'friction' : 0.3 ,
            'density' : 1.0 ,
        }

    //creating body
    this.body=Bodies.rectangle(x,y,50,50,Boxprop)
    this.width=50;
    this.height=50;

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
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        //pop tells that settings should halt
        pop();
    }
}