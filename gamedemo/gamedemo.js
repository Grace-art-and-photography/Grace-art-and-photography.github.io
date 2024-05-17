var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";

function preload() {
  map1 = loadImage('https://grace-art-and-photography.github.io/images/map1.jpg');
  map2 = loadImage('https://grace-art-and-photography.github.io/images/map2.jpg');
  map3 = loadImage('https://grace-art-and-photography.github.io/images/map3.jpg');
  Waldo1 = loadImage ('https://grace-art-and-photography.github.io/images/Waldo1.png');
  win = loadImage ('https://grace-art-and-photography.github.io/images/win.jpg');

}
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
} // end of setup

function draw() {
  background(map1);
  if(gameState == "L1"){
   levelOne();
  }
  if(gameState == "L2"){
    levelTwo();
  }
  if(gameState == "L3"){
    levelThree();
  }
  if (gameState == "L4"){
      LevelFour();
  }
    
    text(("Score: " + score),width/2,40);
} //end of draw


function levelOne(){
    text("Level 1", width/2, height-20);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/1.5){
      ballx = random(width);
      bally = random(height);
      score = score +1;
    }
    if(score >= 5){
      gameState = "L2";
    }
    
    image (Waldo1,ballx, bally, ballSize, ballSize);
    //line(ballx, bally, mouseX, mouseY);
}// end of 1


function levelTwo(){
  background(map2);
    text("Level 2!", width/2, height-20);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/2){
      ballx = random(width);
      bally = random(height);
      score = score +1;
    }
    if(score >= 10){
      gameState = "L3";
    }
    
image (Waldo1,ballx, bally, ballSize, ballSize);}


function levelThree(){
  background (map3);
    text("Level 3!", width/2, height-20);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/2){
      ballx = random(width);
      bally = random(height);
      score = score +1;
      ballSize = ballSize -5;
    }
    if(score >= 15){
     background (random(255));
     gameState = "L4";
    }
   // line(ballx, bally, mouseX, mouseY);
    image (Waldo1,ballx, bally, ballSize, ballSize);
}// end of 3

function LevelFour(){
  background (win);
     text ("You Win!", width/2, height-20);
    
   
}
