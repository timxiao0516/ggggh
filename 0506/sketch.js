function preload() {
  fishImg = loadImage("fish1.png");
  jellyfishImg = loadImage("jellyfish.png");
}
function setup () {
  createCanvas(windowWidth,windowHeight);
}
function draw() {
  background(220);
  imageMode(CENTER)
  fill(67,117,224,100)
  ellipse(width/2,height/2,sin(frameCount/100)*500)
  for(y=0;y<height;y=y+200){
  for(x=0;x<width;x=x+250){
    dx=0
    dy =sin(frameCount/10+x+y*2)*3
    push()
    translate(x + dx, y + dy)
    rotate(sin(frameCount/100+x+y)/3)
    image(fishImg,0,0,150,100)
    pop();
    
    image(jellyfishImg, mouseX, mouseY)
  
    }
  }
  
}