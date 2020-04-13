function setup() {
  ephramsRepositioninthTYhing();

}

function draw() {
background (0, 0, 0);
// rect(x, y, w, h);
rect(400, 485, 100, 400);
rect(600, 485, 100, 400);
rect(500, 485, 300, 100);
rect(800, 560, 100, 250);
rect(800, 485 - 150, 100, 100);


// rect(500, 485 + 50, 300, 100);

}



function ephramsRepositioninthTYhing(){
  var cnv;
  cnv = createCanvas(windowWidth, windowHeight);
  var screenX = 0;
  var screenY = 0;
  cnv.position(screenX, screenY);
  rectMode(CENTER);
}
