class Game{
    constructor(){

    }

    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player = createSprite(200,500);
    player.addImage("player1",player_img);
    
        }
    
    play(){
        
                form.hide();
                Player.getPlayerInfo();
                 image(back_img, 0, 0, windowWidth, 800);
                 var x =100;
                 var y=200;

                 //drawSprites();

                
                
                 
                 if (keyWentDown(RIGHT_ARROW)) {
                   // player.distance -= 10
                   // player.update();
           
                }
                if (keyWentDown(LEFT_ARROW)) {
                   // player.distance += 10
                   // player.update();
                   player.velocityX = -6
                }
                if(keyWentUp(LEFT_ARROW) || keyWentUp(RIGHT_ARROW)){
                    player.velocityX = 0
                }
                if(keyWentDown("space") && gameState === 1){
                    fire = createSprite(player.x,player.y,10,10)
                    fire.velocityY = -6
                    fire.addImage(fireimg)

                    fireGroup.add(fire)
                }
                 if (frameCount % 45 === 0) {
                     enemies = createSprite(random(100, 950), 0, 100, 100);
                     enemies.velocityY = 6;
                     //var rand = Math.round(random(1,5));
                     enemies.addImage(enemy_img)
                     enemyGroup.add(enemies)
                 }
                 
                //   if (player.index !== null) {
                //      //fill code here, to destroy the objects.
                //     for(var i = 0; i<fireGroup.length; i++){
                //         if(fireGroup.get(i).isTouching(enemies)){
                //             fireGroup.get(i).destroy()
                //             enemies.destroy()
                //             player.update()
                //             score -= 1
                //         }
                //     }
                //   }
                // if(fireGroup.isTouching(enemies)){
                //     fireGroup.destroy()
                // }
                  fill("white");
                  textSize(25);
                  text("Aliens Left : "+score,830,25)
                  var s = createSprite(200,200)

         drawSprites()
        
         

    }

    end(){
       console.log("Game Ended");
    }

}