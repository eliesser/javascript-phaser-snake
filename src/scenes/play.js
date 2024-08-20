import { Snake } from '../gameobjects/Snake.js';
import { Eat } from '../gameobjects/Eat.js';

class Play extends Phaser.Scene {
  constructor() {
    super('Play');
  }

  preload() {
    console.log('Escena play');

    this.snake = new Snake(this);

    this.eat = new Eat(this);
  }

  create() {
    this.scene.launch('UI');
    const sceneUI = this.scene.get('UI');
    this.keys = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.snake.body[0], this.eat.food, () => {
      this.eat.createFood();
      this.snake.grow();
      sceneUI.addPoint();
    });
  }

  update(time) {
    if (this.keys.left.isDown && this.snake.dir !== 'right') {
      this.snake.changeMove('left');
    } else if (this.keys.right.isDown && this.snake.dir !== 'left') {
      this.snake.changeMove('right');
    } else if (this.keys.up.isDown && this.snake.dir !== 'down') {
      this.snake.changeMove('up');
    } else if (this.keys.down.isDown && this.snake.dir !== 'up') {
      this.snake.changeMove('down');
    }

    this.snake.update(time);
  }
}

export default Play;
