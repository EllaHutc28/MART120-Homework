// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// obstacles array
var obstacles = [];

function setup() {
    createCanvas(500, 600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200, 350);
    createObstacles(2); // Adjust the number of obstacles as needed
}

function draw() {
    background(120, 45, 78);
    stroke(0);
    fill(0);

    // call createBorders function
    createBorders(10);

    // exit message
    textSize(16);
    text("EXIT", width - 50, height - 50);

    drawCharacter();
    characterMovement();

    moveObstacles();
    drawObstacles();

    checkWin();
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

function createBorders(thickness) {
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    obstacles.push({ x: mouseX, y: mouseY, size: random(10, 30), color: color(random(255), random(255), random(255)) });
}

function createObstacles(numObstacles) {
    for (let i = 0; i < numObstacles; i++) {
        obstacles.push({
            x: random(width),
            y: random(height),
            size: random(10, 30),
            color: color(random(255), random(255), random(255))
        });
    }
}

function drawObstacles() {
    for (let obstacle of obstacles) {
        fill(obstacle.color);
        circle(obstacle.x, obstacle.y, obstacle.size);
    }
}

function moveObstacles() {
    for (let obstacle of obstacles) {
        obstacle.x += random(-5, 5);
        obstacle.y += random(-5, 5);

        // wrap around the screen
        if (obstacle.x > width) {
            obstacle.x = 0;
        } else if (obstacle.x < 0) {
            obstacle.x = width;
        }

        if (obstacle.y > height) {
            obstacle.y = 0;
        } else if (obstacle.y < 0) {
            obstacle.y = height;
        }
    }
}

function checkWin() {
    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }
}