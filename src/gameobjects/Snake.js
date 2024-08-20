export class Snake {
  constructor(scene) {
    this.scene = scene;
    this.body = [];
    this.dir = 'left';
    this.timer = 0;

    for (let index = 0; index < 3; index++) {
      this.body.push(
        this.scene.physics.add
          .image(
            this.scene.sys.game.config.width / 2 + index * 10,
            this.scene.sys.game.config.height / 2,
            'body'
          )
          .setOrigin(0)
      );
    }

    for (let index = 1; index < this.body.length; index++) {
      this.scene.physics.add.collider(this.body[0], this.body[index], () =>
        this.crash()
      );
    }
  }

  grow() {
    const obj = this.body[this.body.length - 1];

    const newObj = this.scene.physics.add
      .image(obj.x, obj.y, 'body')
      .setOrigin(0);

    this.body.push(newObj);

    this.scene.physics.add.collider(this.body[0], newObj, () => this.crash());
  }

  crash() {
    this.scene.scene.start('Gameover');
  }

  changeMove(dir) {
    this.dir = dir;
  }

  update(time) {
    if (time > this.timer) {
      for (let index = this.body.length - 1; index > 0; index--) {
        this.body[index].x = this.body[index - 1].x;
        this.body[index].y = this.body[index - 1].y;

        this.body[this.body.length - 1 - index].x = Phaser.Math.Wrap(
          this.body[this.body.length - 1 - index].x,
          0,
          this.scene.sys.game.config.width
        );

        this.body[this.body.length - 1 - index].y = Phaser.Math.Wrap(
          this.body[this.body.length - 1 - index].y,
          20,
          this.scene.sys.game.config.height
        );
      }

      switch (this.dir) {
        case 'right':
          this.body[0].x += 10;
          break;
        case 'left':
          this.body[0].x -= 10;
          break;
        case 'up':
          this.body[0].y -= 10;
          break;
        case 'down':
          this.body[0].y += 10;
          break;

        default:
          break;
      }
      this.timer = time + 150;
    }
  }
}
