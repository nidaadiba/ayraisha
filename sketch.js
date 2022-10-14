
function setup() {
  createCanvas(800,800);
  ayra =createSprite (20,20,20,20);
}

function draw() 
{
  background('blue');
  if (keyDown(RIGHT_ARROW)) {
    ayra.x=ayra.x+2
  }
  drawSprites()

}




