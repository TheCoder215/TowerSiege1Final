class Box {

    constructor(x,y,width,height,density){

        var options = {
            isStatic:false,
           // density:0.4,
            density:density,
            friction:0.5
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }

    display(color){
        /*var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);*/
        rectMode(CENTER);
        fill(color);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
       // pop();  
    }



}