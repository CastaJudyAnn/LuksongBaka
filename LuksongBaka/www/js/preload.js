preloadGame = {
	preload : function (){
		game.load.image('play',"img/lbbg.jpg");
		game.load.image('bg',"img/lbbg2.jpg");
		game.load.image('platform',"img/platform.png");
    game.load.image('platform2',"img/pointer.png");
    game.load.image('b1','img/level.png');
    game.load.image('metre','img/right.png');
    game.load.image('parallax','img/play.png');
		game.load.spritesheet('player','img/playsprite.png',100,100);
		game.load.image('match','img/2.png');
		game.load.image('btnleft','img/nj.png');
		game.load.image('star','img/low.png');
		game.load.image('sky2','img/p2.png');
		game.load.image('gameover','img/gameover.png');
    game.load.image('line','img/line.png');
    game.load.image('line2','img/line.png');
    game.load.image('b2','img/high.png');
    game.load.spritesheet('pause', 'img/pause.png',50,50);

    game.load.spritesheet('left', 'img/exact.png',75,113);


    // ito yung mga music mag download kna lng ng music at palitan mu yung anjan
    game.load.audio('bgMusic', 'audio/clapping.mp3');
    game.load.audio('yay', 'audio/clapping.mp3');
    game.load.audio('boo', 'audio/clapping.mp3');

	},
	create: function(){
		game.state.start('menu');
	}
}