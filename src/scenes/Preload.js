import Phaser from 'phaser';

import woodPlankImg from '../assets/images/woodPlank.png';

import backgroundImg from '../assets/images/background.jpg';
import tableImg from '../assets/images/table.png';
import pipeImg from '../assets/images/pipe.png';
import handwheelImg from '../assets/images/handwheel.png';
import jetImg from '../assets/images/jet.png';
import jetParticlesImg from '../assets/images/jetParticles.png';
import jetBrightImg from '../assets/images/jetBright.png';
import colorSwatchImg from '../assets/images/colorSwatch.png';
import colorSwatchFluidImg from '../assets/images/colorSwatchFluid.png';
import colorSwatchLenImg from '../assets/images/colorSwatchLen.png';
import bottleBackImg from '../assets/images/bottleBack.png';
import bottleFluidImg from '../assets/images/bottleFluid.png';
import bottleFrontImg from '../assets/images/bottleFront.png';
import bottleFluidBrightImg from '../assets/images/bottleFluidBright.png';

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

    this.load.image('background', backgroundImg);
    this.load.image('table', tableImg);
    this.load.image('pipe', pipeImg);
    this.load.image('handwheel', handwheelImg);
    this.load.image('jet', jetImg);
    this.load.image('jetParticles', jetParticlesImg);
    this.load.image('jetBright', jetBrightImg);
    this.load.image('colorSwatch', colorSwatchImg);
    this.load.image('colorSwatchFluid', colorSwatchFluidImg);
    this.load.image('colorSwatchLen', colorSwatchLenImg);
    this.load.image('bottleBack', bottleBackImg);
    this.load.image('bottleFluid', bottleFluidImg);
    this.load.image('bottleFront', bottleFrontImg);
    this.load.image('bottleFluidBright', bottleFluidBrightImg);
  }

  create() {
    // start game scene
    this.scene.start('Game');
  }
}

export default Preload;
