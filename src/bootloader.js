class Bootloader extends Phaser.Scene {
  constructor() {
    super('Bootloader');
  }

  preload() {
    console.log('Escena Bootloader');

    this.load.image('body', 'assets/body.png');

    this.load.image('food', 'assets/food.png');

    this.load.image('board', 'assets/board.png');

    this.load.json('fontJson', 'assets/font/font.json');
    this.load.image('font', 'assets/font/font.png');
  }

  create() {
    const fontJson = this.cache.json.get('fontJson');
    this.cache.bitmapFont.add(
      'pixel',
      Phaser.GameObjects.RetroFont.Parse(this, fontJson)
    );
    this.scene.start('Menu');
  }
}

export default Bootloader;
