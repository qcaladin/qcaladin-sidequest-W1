function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0, 200, 200);

  textSize(25);
  fill(0);
  text("Is this seat taken?", width / 2, height / 2);
}
