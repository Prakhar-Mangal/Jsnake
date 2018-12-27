let l=-1,r=1,u=-1,d=1,a=0,c=0;
let rez=20;
var button;
var input;
let snake;
let w,h;
let score=0,score1=0;
function setup() {
  createCanvas(400, 400);
  button=createButton("Speed");
  slider=createSlider(1,10,10);
  input=createInput('Player Name');
  w=floor(width/rez);
  h=floor(height/rez);
  snake=new Snake();
  //frameRate(slider.value());
  foodLocation();
}
var food={
  x:0,
  y:0
};
function foodLocation(){
   food.x=floor(random(w));
   food.y=floor(random(h));
  //food=createVector(x,y);
}


function keyPressed(){
if(keyCode==LEFT_ARROW&&l<0){
  snake.setDir(-1,0);
  r=-1;
  u=-1;
  d=1;
}
else if(keyCode==RIGHT_ARROW&&r>0){
  snake.setDir(1,0);
  l=1;
  u=-1;
  d=1;
}
else if(keyCode==DOWN_ARROW&&d>0){
  snake.setDir(0,1);
  l=-1;
  u=1;
  r=1;
}
else if(keyCode==UP_ARROW&&u<0){
  snake.setDir(0,-1);
  l=-1;
  r=1;
  d=-1;
}

}



function draw() {
  frameRate(slider.value());
  if(snake.eat(food)){
  foodLocation();
    score++;
    score1++;
    a=1;
    if(score%5==0){
      snake.grow();
      snake.grow();
      snake.grow();
      score1=3+score1;
    }
  }
 scale(rez);
  background(255,255,0);
  textSize(1);
  textAlign(CENTER);
  text(input.value(),70/rez,20/rez);
  fill(random(0,255),random(0,255),random(0,255));
  textSize(2);
    textAlign(CENTER);
    text(score1, 200/rez, 200/rez);
  snake.eat(food);
  snake.endGame();
  snake.update();
  snake.show();

  if(snake.endGame()){
    background(255,0,0);
    textSize(2);
    textAlign(CENTER);
    text('GAME OVER', 200/rez, 200/rez);
    noLoop();
  }

  noStroke();

  if(score%5==0&&a==1){
    fill(random(0,255),random(0,255),random(0,255));
  }
  else{
  fill(255,0,0);
}
  rect(food.x,food.y,1,1);
}
