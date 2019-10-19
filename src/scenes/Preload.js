import Phaser from 'phaser';

import woodPlankImg from '../assets/images/woodPlank.png';
import emptyBottleImg from '../assets/images/emptyBottle.png';
import colorSelectImg from '../assets/images/colorSelect.png';
import colorHandwheelImg from '../assets/images/colorHandwheel.png';
import colorFaucetImg from '../assets/images/colorFaucet.png';
import colorDropImg from '../assets/images/colorDrop.png';

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
    this.load.image('colorSelect', colorSelectImg);
    this.load.image('colorHandwheel', colorHandwheelImg);
    this.load.image('colorFaucet', colorFaucetImg);
    this.load.image('colorDrop', colorDropImg);
  }

  create() {
    // start game scene
    this.scene.start('Game');
  }
}

export default Preload;
