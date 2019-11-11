var sparks = [];
var firework;
var prefire;
var fireworkFX;

function preload (){
	fireworkFX = loadSound("firework.mp3");
}
function setup() {
  createCanvas(800, 600)

  for (var i = 0; i < 210; i++) {
    sparks.push(new Boom(random(1,5), random(-2,2)));
  }
  prefire = 0;
  firework = 0;
	clickTime = 0;
	duration = 0;
}

function draw() {
  background(0);

  if (firework > prefire){
    for (var i = 0; i < 210; i++) {
      sparks[i].update();
      //this part gets added to the sound effect part


	}

  }
  fill(255);
  textSize(75);
  text("Happy Fourth!", 170, 70);
  fill(255);
  textSize(25);
  text("Click for Fireworks!", 300, 130);
}
function mouseReleased(){
  prefire = firework;
  firework++;
	fireworkFX.play();

	duration = clickTime + 950;
	if (mouseY > 130){
      if (firework > prefire){
        for (var i = 0; i < 210; i++) {
          sparks[i].x = mouseX;
          sparks[i].y = mouseY
	  
        }
      }
	}
}

function Boom(tempSpeed, lateral) {

  this.speed = tempSpeed;
  this.lateral = lateral;
  this.r = random(20, 255);
  this.g = random(20, 255);
  this.b = random(20, 255);
  this.x = int(random(0, width));
  this.y = 0;
  this.yMov = 0;
  this.xPos = random(width);
  this.cWidth = 10;

  this.update = function () {
    this.y += this.speed;
    this.x += this.lateral;
	  noStroke();
    fill(this.r, this.g, this.b);
    circle (this.x, this.y,this.cWidth );
  }

}