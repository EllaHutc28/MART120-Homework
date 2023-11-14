// x and y for my character
var characterX = 100;
var characterY = 100;

// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for obstacles
var obstacle1X, obstacle1Y, obstacle1Size, obstacle1Color;
var obstacle2X, obstacle2Y, obstacle2Size, obstacle2Color;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

// visual exit
var exitX, exitY, exitSize;

function setup() {
    createCanvas(500, 600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200, 350);
    createObstacles();
    createExit();
}

function draw() {
    background(120, 45, 78);
    stroke(0);
    fill(0);

    createBorders(10);

    textSize(16);
    text("EXIT", exitX, exitY);

    drawCharacter();
    characterMovement();

    drawObstacles();
    moveObstacles();

    // potential enemy
    fill(13, 145, 14);
    circle(shapeX, shapeY, 10);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    if (shapeX > width) {
        shapeX = 0;
    }
    if (shapeX < 0) {
        shapeX = width;
    }
    if (shapeY > height) {
        shapeY = 0;
    }
    if (shapeY < 0) {
        shapeY = height;
    }

    if (characterX > exitX && characterY > exitY) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(23, 40, 123);
    circle(characterX, characterY, 25);
}

function createObstacles() {
    obstacle1X = random(width);
    obstacle1Y = random(height);
    obstacle1Size = random(20, 50);
    obstacle1Color = color(random(255), random(255), random(255));

    obstacle2X = random(width);
    obstacle2Y = random(height);
    obstacle2Size = random(20, 50);
    obstacle2Color = color(random(255), random(255), random(255));
}

function drawObstacles() {
    fill(obstacle1Color);
    circle(obstacle1X, obstacle1Y, obstacle1Size);

    fill(obstacle2Color);
    circle(obstacle2X, obstacle2Y, obstacle2Size);
}

function moveObstacles() {
    obstacle1X += random(-5, 5);
    obstacle1Y += random(-5, 5);

    obstacle2X += random(-5, 5);
    obstacle2Y += random(-5, 5);

    checkObstacleBounds();
}

function checkObstacleBounds() {
    if (obstacle1X > width) {
        obstacle1X = 0;
    }
    if (obstacle1X < 0) {
        obstacle1X = width;
    }
    if (obstacle1Y > height) {
        obstacle1Y = 0;
    }
    if (obstacle1Y < 0) {
        obstacle1Y = height;
    }

    if (obstacle2X > width) {
        obstacle2X = 0;
    }
    if (obstacle2X < 0) {
        obstacle2X = width;
    }
    if (obstacle2Y > height) {
        obstacle2Y = 0;
    }
    if (obstacle2Y < 0) {
        obstacle2Y = height;
    }
}

function createExit() {
    exitX = width - 50;
    exitY = height - 50;
    exitSize = 25;
}

function createBorders(thickness) {
    rect(0, 0, width, thickness);
    rect(0, 0, thickness, height);
    rect(0, height - thickness, width, thickness);
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }

  }
  */
