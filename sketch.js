var ball,bg1img,b1img,b2img,fiveimg,cupcake,dessert,donut;
var bg1,b2,b1,five,so;
function preload()
{
bg1img=loadImage("cake1.PNG")
b1img=loadImage("b1.png");
b2img=loadImage("b2.png");
fiveImg=loadImage("five.png");
cupcake=loadImage("cupcake.png")
dessert=loadImage("dessert.png")
donut=loadImage("donut.png")
so=loadSound("s1.mp3")
}
function setup(){
    createCanvas(400,400);
 
    bb1=createSprite(200,200,400,400)
    bb1.addImage("sd",bg1img)
  bb1.scale=0.5
  five= createSprite(50,70,10,10);
  five.addImage("f3",fiveImg)
  five.scale=0.05
}

function draw(){
    background(0);
  spawnDeco();
drawSprites();

}

function spawnDeco()
{
  if(frameCount%60==0)
  {
    var deco=createSprite(random(0,400),-10,100,100);
    deco.velocityY=5

    deco.scale=0.1; 
    var r=Math.round(random(1,5));
    console.log(r)
    switch(r)
    {
     case 1:
       deco.addImage("b1",b1img)
       break;
       case 2:
        deco.addImage("b2",b2img)
        break;
        case 3:
       deco.addImage("b3",cupcake)
       break;
       case 4:
       deco.addImage("b4",dessert)
       break;
       case 5:
       deco.addImage("b5",donut)
       break;
       default:
break;
    }

deco.lifetime=200;

  }
}

function keyPressed()
{
  if(keyCode==32)
  {
    so.play()
  }
}