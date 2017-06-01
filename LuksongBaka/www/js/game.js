var w = 800, h = 600;
var platform, platform2;
var player, player2, metre, b1, line, line2;
var keyboard, pause_label,startText;
		var a=0, l=3, buttongo;
var bgmusic, loopAudio, boomusic, yaymusic;
var match, star, scoreText, retrieveBest, scoreText2, lifeText, lifeText2;

var game = new Phaser.Game(800,600, Phaser.CANVAS, '');

	game.state.add('boot',bootGame);
	game.state.add('preload',preloadGame);
	game.state.add('menu',menuGame);
	game.state.add('play', playGame);
	game.state.add('win', winGame);
	game.state.add('lose',loseGame);
	game.state.add('game', game);

	//	Now start the Boot state.
	game.state.start('boot');
