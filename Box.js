class Box{
    constructor(x,y,width,height){
        //creating variable for the propert 
        var Boxprop={
            'restitution' : 0.8 ,
            'friction' : 1,
            'density' : 1 
                    }

    //creating body
    this.body=Bodies.rectangle(x,y,width,height,Boxprop)
    this.width=width;
    this.height=height;

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
        stroke("yellow")
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        //pop tells that settings should halt
        pop();
    }
}