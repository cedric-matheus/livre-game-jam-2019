import Phaser from 'phaser';

import { Potion, TargetPotion } from '../gameObjects';

class Game extends Phaser.Scene {
  constructor() {
    // set scene key
    super('Game');
  }

  create() {
    // add player potion
    this.potion = new Potion(this);

    // add target potion
    this.targetPotion = new TargetPotion(
      this,
      'Poção do Amor',
      'rgb(255, 0, 0)'
    );
  }

  update() {}
}

export default Game;
