var moveR;
var fixedR;

function setup() {
  createCanvas(800, 400);
  moveR = createSprite(400, 200, 50, 50);
  moveR.shapeColor = "red";
  fixedR = createSprite(200, 200, 50, 25);
  fixedR.shapeColor = "red";
}

function draw() {
  background(150);

  console.log(moveR.x - fixedR.x);

  if (
    moveR.x - fixedR.x < moveR.width / 2 + fixedR.width / 2 &&
    fixedR.x - moveR.x < moveR.width / 2 + fixedR.width &&
    moveR.y - fixedR.y < moveR.height / 2 + fixedR.height / 2 &&
    fixedR.y - moveR.y < moveR.height / 2 + fixedR.height
  ) {
    moveR.shapeColor = "orange";
    fixedR.shapeColor = "orange";
  } else {
    moveR.shapeColor = "red";
    fixedR.shapeColor = "red";
  }

  moveR.x = mouseX;
  moveR.y = mouseY;

  drawSprites();
}
