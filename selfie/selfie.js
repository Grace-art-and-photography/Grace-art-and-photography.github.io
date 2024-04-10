function setup() {
createCanvas(600, 600)
background(255, 179, 227);
}
function draw() {
fill(204, 170, 122) // backhair
noStroke();
quad (175, 235 , 425, 235, 450, 550, 150, 550);

fill(255, 222, 214); //head
ellipse (300,300,200,300);

fill(204, 170, 100) // hair
noStroke();
bezier(300, 140, 50, 200, 220, 300, 100, 450, 400);

fill(240); //eyes
ellipse (250, 250, 50, 30);
ellipse (350, 250, 50, 30);

fill(190,229,232)
circle (250, 250, 30);
circle (350, 250, 30);


}
