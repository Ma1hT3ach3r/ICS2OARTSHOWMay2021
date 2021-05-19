let dots = [];
let sNum=0;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 100; i++) {
    dots.push(new Dot());
  }
}

function draw() {
  if (sNum==0){
  open();
  } else if(sNum==1){
    art();
  } else if(sNum==2){
    close();
  }
}

function mousePressed(){
  sNum=(sNum+1);
}
//scene 1
function open() {
  background(100, 100, 100);
  textSize(20);
  text("Welcome to the Dot Show!", 100, 100);
}

//scene 2
function art() {
  //background(220);
  //hard coding solution
  for (var i = 0; i < 100; i += 20) {
    noStroke();
    fill(10 * random(i), 20 * random(i), 30 * random(i));
    ellipse(100 + random(i), 100 + random(i), 100, 100);
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].update();
    dots[i].show();
  }
}

//scene 3
function close() {
  background(10, 10, 200);
  textSize(20);
  text("Thank you for watching!", 100, 100);
}
