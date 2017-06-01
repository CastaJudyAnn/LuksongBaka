playGame={
	create:function(){
 game.add.image(0,0,'bg');
    b1 = game.add.sprite(0,0,'b1');
    line = game.add.sprite(0,290,'line');
    line2 = game.add.sprite(368,220,'line2');
        platform = game.add.sprite(0,568,'platform');
        platform.scale.x=2;
    platform2 = game.add.sprite(0,8,'platform2');
   button = game.add.button(0,350,'b2',this.btn2);
    Leftbutton = game.add.button(605,370,'left',this.pushJump2);

        player = game.add.sprite(200,410,'player');
        match = game.add.sprite(350,400,'match');
        match.scale.y=0.75;
        star = game.add.sprite(650,500,'star');


        game.physics.arcade.enable(player);
      game.physics.arcade.enable(b1);
      game.physics.arcade.enable(line);
      game.physics.arcade.enable(line2);

      game.physics.arcade.enable(platform2);
        game.physics.arcade.enable(platform);
        game.physics.arcade.enable(match);
        game.physics.arcade.enable(star);

        platform.body.immovable = true;
        match.body.immovable = true;
    line.body.immovable = true;
    line2.body.immovable = true;

    platform2.body.collideWorldBounds = true;
    platform2.body.bounce.y=1;
        player.body.collideWorldBounds = true;
        player.body.gravity.y=1000;
        match.body.collideWorldBounds = true;
        match.body.gravity.y=1000;

    player.animations.add('walk',[0,1,2,3,4],14,true);

    scoreText = game.add.text(50,20,'PLAYER 1',{ fontSize: '30px', fill: 'purple' });
    lifeText = game.add.text(50,50,'life: 3',{ fontSize: '20px', fill: 'purple' });
    scoreText = game.add.text(550,20,'Score: 0',{ fontSize: '20px', fill: 'purple' });
    bestScore = game.add.text(550,50,'High Score: '+playGame.retrieveBest(),{fill:"purple"});
         
    pause_label = game.add.button(700, 100, 'pause',this.startOnclick);
        buttonPlay = game.add.button(0,0,'play',this.play);

pause_label.inputEnabled = true;
pause_label.events.onInputUp.add(function () {
// When the paus button is pressed, we pause the game
game.paused = true;});

game.input.onDown.add(unpause, self);
 function unpause(event){
if(game.paused){
game.paused = false;
pause_label.visible=true;
}
};

     game.input.onDown.add(unpause, self);

            // dito na magplaplay yung bg music pero yung iba sa player.kill() nakalagay
            yaymusic = game.add.audio('yay');
            boomusic = game.add.audio('boo');
            bgmusic = game.add.audio('bgMusic');
            bgmusic.play();
            this.loopAudio(4000);
	},
	update:function(){
      game.physics.arcade.collide(player,platform);
        game.physics.arcade.collide(platform,match);
    game.physics.arcade.collide(platform2,line);

        game.physics.arcade.overlap(player,star,this.collectStar);

    game.physics.arcade.overlap(player,match,this.killMatch);
    game.physics.arcade.overlap(player,line2,this.killPlayer);


	},collectStar:function(player,star){
            a = a+ 5;

                // dito mag plaplay pag minus life
                boomusic.play();
                
            if(star.kill()){
    scoreText.text = "Score: "+a;
        button = game.add.button(350,300,'btnleft',playGame.btnleft1);
    player.animations.stop('walk');
            }
        },
          startOnClick:function(){
      game._paused=true;
},

        // dito yung function para mag loop yung bgmusic
        loopAudio:function(time){
         setInterval (function (){
           bgmusic.play();
         },time);
        },

    play:function(){
      buttonPlay.destroy();
    },
     btnleft1:function(){
                game.input.onTap.addOnce(playGame.restart,this);
                button.destroy();

            // dito magsstop yung music.
      // boomusic.stop();
      // yaymusic.stop();

            if(a==0){
               match.revive();
               match.reset(350,400);
               match.scale.y=0.75;
                button.destroy();
            }
            else if(a==5){
               match.revive();
               match.reset(350,400);
               match.scale.y=1;
                button.destroy();
            }
            else if(a==10){
               match.revive();
               match.reset(350,400);
               match.scale.y=1.25;
               match.scale.x=0.75;
                button.destroy();
            }
            else if(a==15){
               match.revive();
               match.reset(360,400);
               match.scale.y=1.5;
               match.scale.x=0.5;
                button.destroy();
            }
            else if(a==20){
               match.revive();
               match.reset(370,400);
               match.scale.y=1.75;
               match.scale.x=0.5;
                button.destroy();
            }
            else if(a==25){
               match.revive();
               match.reset(390,400);
               match.scale.y=2.0;
               match.scale.x=0.3;
                button.destroy();
            }
            if(a==30){
    scoreText = game.add.text(210,220,'Congrats you have finished the game',{ fontSize: '24px', fill: 'pink' });
    scoreText = game.add.text(260,250,'Player1 Score: '+a,{ fontSize: '40px', fill: 'pink' });
        
    buttongo = game.add.button(300,350,'gameover', playGame.overgame);}
    },
     killPlayer:function(player,line2){
      if(player.kill()){
        l = l - 1;
        lifeText.text="life: "+l;

        // dito mag plaplay pag minus life
        boomusic.play();

    player.animations.stop('walk');
                    if(playGame.retrieveBest() <= a){
                   localStorage.setItem("gameStorage",a);
               }
      }
    button = game.add.button(350,300,'btnleft',playGame.btnleft1);
      if(l==0){
        button.destroy();
    scoreText = game.add.text(260,250,'Player1 Score: '+a,{ fontSize: '40px', fill: 'purple' });
        
    buttongo = game.add.button(300,350,'gameover', playGame.overgame);
    match.destroy();
    star.destroy();
      }
    },
     killMatch:function(player,match){
      if(player.kill()){
        l = l - 1;
        lifeText.text="life: "+l;

        // dito mag plaplay pag minus life
        boomusic.play();

    player.animations.stop('walk');
      }
    button = game.add.button(350,300,'btnleft',playGame.btnleft1);
      if(l==0){
        button.destroy();
    scoreText = game.add.text(260,250,'Player1 Score: '+a,{ fontSize: '40px', fill: 'purple' });
        
    buttongo = game.add.button(300,350,'gameover', playGame.overgame);
    match.destroy();
    star.destroy();
      }
    },
        
             restart:function () {
           player.revive();
           player.reset(200,410)
           star.revive();
       star.reset(650,500)
       platform2.reset(0,0)
            },


         pushJump2:function(){
          platform2.body.velocity.y=0;
            if(platform2.body.y>=200){
        player.animations.play('walk');
    if(player.body.touching.down){
        player.body.velocity.y = -175;
        player.body.velocity.x = 300;
                // high.kill();
    }
            }
       if(platform2.body.y==100 || platform2.body.y<=200){
        player.animations.play('walk');
    if(player.body.touching.down){
        if(a==0){
        player.body.velocity.y = -475;
        player.body.velocity.x = 300;
    }
    else if(a==5){
    player.body.velocity.y = -525;
        player.body.velocity.x = 300;
    }
    else if(a==10){
    player.body.velocity.y = -550;
        player.body.velocity.x = 250;
    }
    else if(a==15){
    player.body.velocity.y = -600;
        player.body.velocity.x = 230;
    }
    else if(a==20){
    player.body.velocity.y = -625;
        player.body.velocity.x = 230;
    }
    else if(a==25){
    player.body.velocity.y = -650;
        player.body.velocity.x = 235;
    }
    }
            }
        if(platform2.body.y<=100){
        player.animations.play('walk');
    if(player.body.touching.down){
        player.body.velocity.y = -1075;
        player.body.velocity.x = 300;
                // high.kill();
    }
            }
          },
        
         overgame:function(){
            window.location.href=window.location.href;
        },
         retrieveBest:function(){
            return ((localStorage.getItem("gameStorage") != null) || (localStorage.getItem("gameStorage") != ""))?localStorage.getItem("gameStorage"):0;
        },
         btn2:function(){
          platform2.body.velocity.y=500;
          if(a==10){
            platform2.body.velocity.y=800;
          }
          else if(a==15){
            platform2.body.velocity.y=1150;
          }
          else if(a==20){
            platform2.body.velocity.y=1400;
          }
          else if(a==25){
            platform2.body.velocity.y=1600;
          }
        }
}