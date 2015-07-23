var game = new Phaser.Game(1024, 1000, Phaser.Canvas, '', { preload: preload, create: create, update: update });
var fpsText = $('#fpsText');
function preload() {
	game.time.advancedTiming = true;
    game.load.image('bg_frontpage', 'assets/rpgMusin.png');
    game.load.spritesheet('btn_start', 'assets/title_btn.png', 242, 95, 3, 5, 10); // test use game.cache.getFrameData('btn_start').getFrames();
    //game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function create() {
	menu.call(this,arguments);
}

function start(){

}

function update() {


    // var moveBackground = function(background) {
    //   if (background.y > 600) {
    //     background.y = -600;
    //     background.y += 1;
    //   } else {}
    //     background.y +=1;
    // }
    // moveBackground(this.bg);
    this.bg.tilePosition.y += 2;
    fpsText.html('fps: ' + game.time.fps);
}

function menu (argument) {
	//background
	//tileSprite = fill sprinte (repeat)
	this.bg = game.add.tileSprite(0, 0, game.width, game.height, 'bg_frontpage');

	//button sprite
	var startButton = game.add.button(game.width/2, 450, 'btn_start', startDown, this, 2, 1, 0);
	startButton.inputEnabled = true;
	startButton.input.useHandCursor = true;
    startButton.anchor.setTo(0.5,0.5);
	startButton.frame = 1;
	function startDown(sprite, pointer) {
	    sprite.setFrames(0, 0, 0);
		sprite.frame = 0;
	}
}

