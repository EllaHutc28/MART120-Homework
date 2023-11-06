var size = 22;
var count = 0;
var sizeDirection = 2;
 
// Homework 10 Tasks:
 
// TASK 1
// Make at least two simple shapes in your self-portrait move back and forth along the x-axis
var shapeOneX = 250;
var shapeOneY = 100;
var shapeOneDirection = 3; // 3. Making it move at different speeds
 
var headX = 250;
var headY = 100;
var headDirection = 1;
 
// TASK 2
// Make at least two simple shapes in your self-portrait move back and forth along the y-axis
 
var shapeTwoX = 200;
var shapeTwoY = 185;
var shapeTwoDirection = 6; // 3. Making it move at different speeds
 
var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;
 
// TASK 4
// Making one shape move back and forth along the x and y-axis diagonally
var diagonalShapeX = 120;
var diagonalShapeY = 200;
var diagonalDirectionX = 2; // Speed along the x-axis
var diagonalDirectionY = 2; // Speed along the y-axis
 
 
 
 
// TASK 2
 
function setup()
{
    createCanvas(500, 600);
}
 
function draw()
{
    background(120,45,78);
    textSize(22)
    text("Good morning!", 10,80);
 
 
    // TASK 1 CODE:
    // head
    fill(255, 204, 0);
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 3)
    {
        headDirection *= -1;
    }
 
    fill(100, 40, 0);
    triangle(shapeOneX, shapeOneY, shapeOneX + 30, shapeOneY - 50, shapeOneX + 60, shapeOneY);
 
    shapeOneX += shapeOneDirection;
    if(shapeOneX >= 300 || shapeOneX <= 50)
    {
        shapeOneDirection *= -1;
    }
 
    // TASK 2 CODE:
 
    // body
    fill(10, 24, 120);
    rect(200,bodyY,100,150);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }
 
    fill(10, 245, 1);
    quad(50, 31 + shapeTwoY, 300, 20 + shapeTwoY, 100, 63 + shapeTwoY, 120, 250 + shapeTwoY);
    shapeTwoY += shapeTwoDirection;
 
    if (shapeTwoY <= 50 || shapeTwoY >= 250) {
      shapeTwoDirection *= -1;
    }
 
    // TASK 4
    // Making one shape move back and forth along the x and y-axis diagonally
    fill(100, 0, 100);
    ellipse(diagonalShapeX, diagonalShapeY, 100, 100);
 
    diagonalShapeX += diagonalDirectionX;
    diagonalShapeY += diagonalDirectionY;
 
 
    if (diagonalShapeX <= 0 || diagonalShapeX >= 300) {
        diagonalDirectionX *= -1;
    }
    if (diagonalShapeY <= 0 || diagonalShapeY >= 220) {
        diagonalDirectionY *= -1;
    }
 
 
    // eyes
    strokeWeight(10);
    fill(0);
    point(200,75);
    point(285,75);
 
    // nose
    point(245,90);
 
    // mouth
    ellipse(245, 135, 30, 45)
 
    // hair
    line(130,175,175,50);
    line(325,50,360,175);
 
    // decoration
    fill(255);
    triangle(220,320,250,220,280,320)
    // right arm
    fill(10, 24, 120);
    rect(300,195,50,10);
    // left arm
    rect(150,195,50,10);
    // left leg
    rect(200,335,10,50);
    // right leg
    rect(290,335,10,50);
 
    // TASK 5
    // Make title of self-portrait get five times and then get smaller five times. Repeat forever.:
 
    fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Ella Hutchinson",270,500 );
 
 
}