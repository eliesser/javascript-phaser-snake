export class Eat {
  constructor(scene) {
    this.scene = scene;

    // this.food = this.scene.physics.add.image(10, 100, 'food').setOrigin(0);
    this.food = this.scene.physics.add.group({
      key: 'food',
      setXY: this.getRandomXY()
    });

    this.food.getChildren()[0].setOrigin(0).setDepth(-1);
  }

  createFood() {
    const { x, y } = this.getRandomXY();
    this.food.getChildren()[0].destroy();
    this.food.create(x, y, 'food');
    this.food.getChildren()[0].setOrigin(0).setDepth(-1);
  }

  getRandomXY() {
    let x = Phaser.Math.Between(30, this.scene.sys.game.config.width - 30);
    let y = Phaser.Math.Between(30, this.scene.sys.game.config.height - 30);

    x = Phaser.Math.Snap.To(x, 10);
    y = Phaser.Math.Snap.To(y, 10);

    return { x, y };
  }
}
