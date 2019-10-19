import Phaser from 'phaser';

import Potion from '../gameObjects/Potion';
import TargetPotion from '../gameObjects/TargetPotion';

class Game extends Phaser.Scene {
  constructor() {
    // set scene key
    super('Game');
  }

  create() {
    // show logo
    this.logo = this.add.image(400, 300, 'logo');

    // add player potion
    this.potion = new Potion(this);

    // add target potion
    this.targetPotion = new TargetPotion(this);
  }

  update() {}
}

export default Game;
