import Phaser from 'phaser';

import woodPlankImg from '../assets/images/woodPlank.png';
import emptyBottleImg from '../assets/images/emptyBottle.png';
import colorSelectImg from '../assets/images/colorSelect.png';
import colorDropImg from '../assets/images/colorDrop.png';

import backgroundImg from '../assets/images/background.jpg';
import tableImg from '../assets/images/table.png';
import pipeImg from '../assets/images/pipe.png';
import handwheelImg from '../assets/images/handwheel.png';

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
    this.load.image('colorDrop', colorDropImg);

    this.load.image('background', backgroundImg);
    this.load.image('table', tableImg);
    this.load.image('pipe', pipeImg);
    this.load.image('handwheel', handwheelImg);
  }

  create() {
    // start game scene
    this.scene.start('Game');
  }
}

export default Preload;
