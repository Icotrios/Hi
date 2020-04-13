var yHi = 3;
var speed = 9;


function setup() {
  ephramsRepositioninthTYhing();

}

function draw() {
background (0, 0, 0);
// rect(x, y, w, h);
rect(400, yHi, 100, 400);
rect(600, yHi, 100, 400);
rect(500, yHi, 300, 100);
rect(800, yHi + (560-485), 100, 250);
rect(800, yHi - 150, 100, 100);
yHi += speed;
// rect(500, yHi + 50, 300, 100);
if (yHi < 0) {
  speed *=-1;
}
if (yHi > height) {
speed *=-1;
}
}



function ephramsRepositioninthTYhing(){
  var cnv;
  cnv = createCanvas(windowWidth, windowHeight);
  var screenX = 0;
  var screenY = 0;
  cnv.position(screenX, screenY);
  rectMode(CENTER);
}

// if(condition){yHi=yHi+1
  //what you want to happen
// }
