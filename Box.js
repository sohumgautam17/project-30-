class Box  {
    constructor(x, y, width, height){
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:0.1,
            
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
   }
   
   display()
   {
    
       var angle = this.body.angle;
        var pos= this.body.position;
        console.log(this.body.speed);
        if(this.body.speed < 3){
         // this.body.display();
         
           }
           else{
        World.remove(world, this.body);
        push();
        
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rotate(angle);
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
 }  
};
  