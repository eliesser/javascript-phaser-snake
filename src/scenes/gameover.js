class Gameover extends Phaser.Scene {
  constructor() {
    super('Gameover');
  }

  preload() {
    console.log('Escena Gameover');
  }

  create() {
    this.scene.stop('UI');
    this.add
      .dynamicBitmapText(
        this.sys.game.config.width / 2,
        this.sys.game.config.height / 2 - 30,
        'pixel',
        'GAMEOVER',
        20
      )
      .setOrigin(0.5);

    this.timeout = setTimeout(() => this.goToMenu(), 10000);

    const enterKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
    enterKey.on('down', () => this.goToMenu());

    this.input.on('pointerdown', () => this.goToMenu());
  }

  goToMenu() {
    clearTimeout(this.timeout);
    this.scene.start('Menu');
  }
}

export default Gameover;
