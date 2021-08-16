class Game {
    constructor()
    {
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
    getLevel(){
        var levelRef  = database.ref('Level');
        levelRef.on("value",function(data){
            levelno = data.val();
        })
    
      }
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    updateLevel(level){
        database.ref('/').update({
          Level: level
        });
      }
    async start(){
      if(gameState === 0)
      {  
        alien1=createSprite(50,50,50,50);

        alien2=createSprite(600,250,50,50);

        alien3=createSprite(1000,350,50,50);
        alien1lasergroup=createGroup();
        alien2lasergroup=createGroup();
        alien3lasergroup=createGroup();

         tank=createSprite(850,650,100,100);
         tanklasergroup=createGroup();
        //tanklaser=createSprite(850,650,100,100);
        form = new Form()
        form.display();
      }

    }

    play()
    {
    // form.hide();
    background(bgImg2);
    game.getLevel();
        if(levelno===1)
        {
           edges=createEdgeSprites();
           
            alien1.addImage(alienImg);
            alien1.scale=0.3;
            alien1.velocityX=4;
            
            alien2.addImage(alienImg);
            alien2.scale=0.3;
            alien2.velocityX=-4;

            
            alien3.addImage(alienImg);
            alien3.scale=0.3;
            alien3.velocityX=4;
            if(alien1.x>displayWidth)
            {
              alien1.x=50
            }
            if(alien2.x<0)
            {
              alien2.x=600
            }
            if(alien3.x>displayWidth)
            {
              alien3.x=1000
            }
            
           
            var brick1=createSprite(50,450,250,20);
           
            var brick2=createSprite(850,450,250,20);
            var brick3=createSprite(1350,450,250,20);

            
            tank.addImage(tankImg);
            tank.scale=0.3;
            //tanklaser.x=tank.x;
            

            if(keyIsDown(LEFT_ARROW))
            {
              tank.x=tank.x-10;
            }
            if(keyIsDown(RIGHT_ARROW))
            {
              tank.x=tank.x+10;
            }
            if(keyIsDown(UP_ARROW))
            {
              tanklaser=createSprite(tank.x-10,600,50,50);
              tanklasergroup.add(tanklaser);
              tanklaser.velocityY=-5;
            }
            if(tanklasergroup.isTouching(alien1))
            {
              alien1.visible=false;
              count=count+1;
            }
            if(tanklasergroup.isTouching(alien2))
            {
              alien2.visible=false;
              count=count+1;
            }
            if(tanklasergroup.isTouching(alien3))
            {
              alien3.visible=false;
              count=count+1;
            }
            if(count===3)
            {
              console.log("Game over")
            }
            if(keyIsDown(DOWN_ARROW))
            {
              console.log("U")
              alien1laser=createSprite(alien1.x,100,10,10);
              alien1laser.velocityY=5;
              alien1lasergroup.add(alien1laser);

              alien2laser=createSprite(alien2.x,300,10,10);
              alien2laser.velocityY=5;
              alien2lasergroup.add(alien2laser);

              alien3laser=createSprite(alien3.x,400,10,10);
              alien3laser.velocityY=5;
              alien3lasergroup.add(alien3laser);
            }
            if(alien1lasergroup.isTouching(tank)||alien2lasergroup.isTouching(tank)||alien3lasergroup.isTouching(tank))
            {
              console.log("You died");
            }
            

        }
        drawSprites()
      
    //   Player.getPlayerInfo();
      
    //   if(allPlayers !== undefined){
    //     background(rgb(198,135,103));
    //     image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
    //     //var display_position = 100;
        
    //     //index of the array
    //     var index = 0;
  
    //     //x and y position of the cars
    //     var x = 175 ;
    //     var y;
  
    //     for(var plr in allPlayers){
    //       //add 1 to the index for every loop
    //       index = index + 1 ;
  
    //       //position the cars a little away from each other in x direction
    //       x = x + 200;
    //       //use data form the database to display the cars in y direction
    //       y = displayHeight - allPlayers[plr].distance;
    //       cars[index-1].x = x;
    //       cars[index-1].y = y;
  
    //       if (index === player.index){
    //         cars[index - 1].shapeColor = "red";
    //         camera.position.x = displayWidth/2;
    //         camera.position.y = cars[index-1].y;
    //       }
         
    //       //textSize(15);
    //       //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
    //     }
  
    //   }
  
    //   if(keyIsDown(UP_ARROW) && player.index !== null){
    //     player.distance +=10
    //     player.update();
    //   }
  
    //   if(player.distance > 3860){
    //     gameState = 2;
    //   }
     
    //   drawSprites();
    // }
  
    // end(){
    //   console.log("Game Ended");
     }
  }
  