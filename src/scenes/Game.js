import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor () {
    // set scene key
    super('Game');
  }

  create () {
    // show logo
    this.logo = this.add.image(400, 300, 'logo');
  }

  update () {}
}

export default Game;
