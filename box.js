class Box{
    constructor(x, y, width, height,Visibility) {
        //super(x,y,50,50);
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;

        console.log(this.body.speed);
        /*
        if(this.body.speed < 3){
          fill("white");
          rect(this.body.position.x,this.body.position.y,this.width,this.height);
          translate(this.body.position.x, this.body.position.y);
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility-5;
          tint(255, this.Visibility);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();  
        }*/
        
        if(this.body.speed < 3){
        fill("white");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
       }
       
        else{
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility-5;
          tint(255, this.Visibility);
          //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop(); 
        }
        
      }
}