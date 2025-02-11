import Phaser from 'phaser';

// images
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
import stopperImg from '../assets/images/stopper.png';
import scrollImg from '../assets/images/scroll.png';
import scrollColorSpotImg from '../assets/images/scrollColorSpot.png';
import helpImg from '../assets/images/help.png';
import lightEffectsImg from '../assets/images/lightEffects.png';
import borderShadowImg from '../assets/images/borderShadow.png';
import closedStopperImg from '../assets/images/closedStopper.png';
import playAgainButtonImg from '../assets/images/playAgainButton.jpg';
import popUpImg from '../assets/images/popUp.jpg';
import popUpBackgroundImg from '../assets/images/popUpBackground.png';

// audios
import musicAud from '../assets/audios/music.mp3';
import changeColorAud from '../assets/audios/changeColor.mp3';
import toggleValveAud from '../assets/audios/toggleValve.mp3';
import bookAud from '../assets/audios/book.mp3';
import corkAud from '../assets/audios/cork.mp3';
import liquidFallingAud from '../assets/audios/liquidFalling.mp3';

class Preload extends Phaser.Scene {
  constructor() {
    // set scene key
    super('Preload');
  }

  preload() {
    // show loading screen
    this.logo = this.add.image(960, 540, 'logo');

    this.tweens.add({
      // adding the wheel to tween targets
      targets: [this.logo],

      // angle destination
      angle: 360 * 5,

      // tween duration
      duration: 5000,

      // tween easing
      ease: 'ease',
    });

    // load game assets
    // images
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
    this.load.image('stopper', stopperImg);
    this.load.image('scroll', scrollImg);
    this.load.image('scrollColorSpot', scrollColorSpotImg);
    this.load.image('help', helpImg);
    this.load.image('lightEffects', lightEffectsImg);
    this.load.image('borderShadow', borderShadowImg);

    this.load.image('closedStopper', closedStopperImg);
    this.load.image('playAgainButton', playAgainButtonImg);
    this.load.image('popUp', popUpImg);
    this.load.image('popUpBackground', popUpBackgroundImg);

    // audios
    this.load.audio('music', musicAud);
    this.load.audio('changeColor', changeColorAud);
    this.load.audio('toggleValve', toggleValveAud);
    this.load.audio('book', bookAud);
    this.load.audio('cork', corkAud);
    this.load.audio('liquidFalling', liquidFallingAud);
  }

  create() {
    // start game scene
    this.scene.start('Game');
  }
}

export default Preload;
