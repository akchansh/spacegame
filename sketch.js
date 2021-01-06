var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player,player2;
var players;
var enemies,enemyGroup;
var fireGroup,fireimg,fire,fire1
var enemy_img,enemy1,enemy2
var player_img,button,b2;
var score = 35

this.destroy = this.remove
function preload(){
  back_img = loadImage("images/background.png");
  player_img = loadImage("images/player2.png");
  enemy_img = loadImage("images/enemy.png");
  fireimg = loadImage("images/fire.png")
  fireGroup = new Group();
}
function setup() {
  createCanvas(600,600);
  window.focus()
  player = createSprite(300,540)
  player.addImage(player_img)
  enemy1 = createSprite(random(300,580),-41,10,10)
  enemy2 = createSprite(random(10,290),-60,10,10)
  enemy1.setVelocity(0,0)
  enemy2.setVelocity(0,0)
  enemy2.addImage(enemy_img)
  enemy1.addImage(enemy_img)
  edges = createEdgeSprites()
}

function draw() {
  background(back_img);

  if(keyWentDown("space") && gameState === 1){
    fire = createSprite(player.x,player.y,1,1)
    fire.setVelocity(0,-8)
    fire.addImage(fireimg)
    fireGroup.add(fire)
  }
  if(keyWentDown("space") && gameState === 0){
    gameState = 1
  }
  //if(fire.isTouching())

  createEdgeSprites()
  player.collide(edges[1])
  player.collide(edges[0])
  drawSprites()
  fill("white");
  textSize(25);
  if(gameState === 1){
    if (keyWentDown(LEFT_ARROW)){
      player.velocityX = -8
    }
    if (keyWentDown(RIGHT_ARROW)){
      player.velocityX = 8
    }
    if(keyWentUp(LEFT_ARROW) || keyWentUp(RIGHT_ARROW)){
      player.velocityX = 0
    }
  enemy1.velocityY = 4
  enemy2.velocityY = 4
  text("Aliens Left :" + score , 430,25)
  if(fireGroup.isTouching(enemy2)){
    for(var i = 0; i<fireGroup.length; i++){
      if(fireGroup.get(i).isTouching(enemy2)){
          fireGroup.get(i).destroy()
          score -= 1
       }
   }
    enemy2.destroy()
    enemy2 = createSprite(random(10,290),-41,10,10) 
    enemy2.velocityY = 4
    enemy2.addImage(enemy_img)
  }
  if(fireGroup.isTouching(enemy1)){
    for(var i = 0; i<fireGroup.length; i++){
    if(fireGroup.get(i).isTouching(enemy1)){
        fireGroup.get(i).destroy()
        score -= 1
     }
 }
    enemy1.destroy()
    enemy1 = createSprite(random(300,580),-41,10,10) 
    enemy1.velocityY = 4
    enemy1.addImage(enemy_img)
  }
  if(enemy1.isTouching(player)){
    gameState = 2
  }
  if(enemy2.isTouching(player)){
    gameState = 2
  }
  if(score === 0){
    gameState = 3
  }
  }
  if(gameState === 2){
    text("Alas, You lose your planet",width/3-50,250)
    text("Press 'R' to Replay",width/3,300)
    enemy1.velocityY = 6
    enemy2.velocityY = 6
    player.destroy()
    if(keyWentDown("R")){
      reset()
      gameState = 0
    }
  }
  
if(gameState === 3){
  enemy2.destroy()
  enemy1.destroy()
  player.destroy()
  text("Hurray!🥇 you Won, You Saved your Planet",width/6-20,200);
  text("Press 'R' to Restart",150,250);
  if(keyWentDown("R")){
    reset()
    gameState = 0
  }
}
  if (gameState === 0){
    fill("white");
    textSize(25);
    text("Hey Captain!",width/3,150);
   text("Now you have to save your Planet from aliens",width/10,200);
   text("Press Space to continue",width/4,300)
   text("Press Space to Fire",width/4+20,250)
 }
}

this.remove = function() {
  this.removed = true;

  quadTree.removeObject(this);
}

function mousePressed(){
if(gameState === 0){
  gameState = 1
b2.visible = false 
}
}

function reset(){
  score = 50;
  enemy1.y = -40;
  enemy2.y = -60;
  enemy2.setVelocity(0,0);
  enemy1.setVelocity(0,0);
  player = createSprite(300,540)
  player.addImage(player_img)
}
