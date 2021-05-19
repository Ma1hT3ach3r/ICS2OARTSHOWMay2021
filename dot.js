class Dot{
  constructor(){
    this.x=random(400);
    this.y=random(400);
    this.col=color(this.x%255,this.y%255,(this.x+this.y)%255)
  }
  
  update(){
    this.x+=random(-20,20);
    this.y+=random(-10,10);
  }
  
  show(){
    fill(this.col);
    noStroke();
    ellipse(this.x,this.y, 10,10);
    
  }
  
}
