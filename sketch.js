function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var circle1 = random(width);
  var circle2 = random(height);
  var circleSize = random(10, 100);
  ellipse(circle1, circle2, circleSize) 
}
