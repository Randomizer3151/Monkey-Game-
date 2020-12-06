var monkey, monkey_running;
var ground;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, ObstacleGroup;
var survivalTime;
var score;


function preload() {

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  monkey.depth = +1;

  ground = createSprite(400, 350, 1500000000000000, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);

 ObstacleGroup = new Group();
 FoodGroup = new Group();


  survivalTime = 0;

}


function draw() {
  clear();
  background('lightblue');
  console.log(monkey.y);
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate());
  text("Survival Time: " + survivalTime, 100, 50);


  //jump when the space key is pressed
  if (keyDown("space")) {
    monkey.velocityY = -12;
    console.log("jump");
  }
  //add gravity
  //monkey.velocityY = monkey.velocityY + 0.8;

  /*if( monkey.y ==159)
   { 
   monkey.velocityY = 6;
   console.log("gravity");
   }
  if(monkey.y==321)
   {
     monkey.velocityY = 0;
   } */



    spawnObstacles();
    spawnFood()
  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 100 === 0) {
    Obstacle = createSprite(300, 50);
    Obstacle.addImage(obstacleImage);
    Obstacle.x = Math.round(random(120, 480));
    Obstacle.velocityY = 1;
    Obstacle.lifetime = 700;
    ObstacleGroup.add(Obstacle);
  }
}
  function spawnFood() {
    if (frameCount % 60 === 0) {
      Food = createSprite(300, 30);
      Food.addImage(bananaImage);
      Food.velocityY = 1;
      Food.lifetime = 700;
      FoodGroup.add(Food);
      Food.scale=0.1;
    }

  }