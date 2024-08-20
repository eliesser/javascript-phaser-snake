class Bootloader extends Phaser.Scene {
  constructor() {
    super('Bootloader')
  }

  preload() {
    console.log('Escena Bootloader')
    this.scene.start('Play')
  }
}

export default Bootloader