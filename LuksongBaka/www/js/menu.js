menuGame = {
	create:function(){
 	bg = game.add.image(0,0,"bg")

 	menuText  = game.add.text(game.width/2-50,game.height/3-50,"Menu",{"fill":"pink"});
 	menuText.scale.x = 3;
 	menuText.scale.y = 3;
 	playText = game.add.text(game.width/2-50,game.height/2,"Play",{"fill":"pink"});
	
        button = game.add.button(340,350,'parallax',this.parallax);
    },
	update:function(){
		if(keyboard.up.isDown){

			game.state.start('play');
		}

	},
	parallax:function(){
			game.state.start('play');
		
	}
}