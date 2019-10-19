import Phaser from 'phaser';

import woodPlankImg from '../assets/images/woodPlank.png';
import emptyBottleImg from '../assets/images/emptyBottle.png';

class Preload extends Phaser.Scene {
  constructor() {
    // set scene key
    super('Preload');
  }

  preload() {
    // show loading screen
    this.logo = this.add.image(400, 300, 'logo');

    // load game assets
    this.load.image('woodPlank', woodPlankImg);
    this.load.image('emptyBottle', emptyBottleImg);
  }

  create() {
    // start game scene
    this.scene.start('Game');
  }
}

export default Preload;
