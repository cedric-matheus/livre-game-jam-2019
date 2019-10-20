import Phaser from 'phaser';
// TODO: load webfonts
// import WebFont from 'webfontloader';

import { Potion, TargetPotion, ColorSystem } from '../gameObjects';
import { generatePotion } from '../utils';

class Game extends Phaser.Scene {
  constructor() {
    // set scene key
    super('Game');
  }

  preload() {
    // TODO: load webfonts
    // // load fonts
    // WebFont.load({
    //   google: {
    //     families: ['Droid Sans', 'Droid Serif'],
    //   },
    // });
    // FIXME: add player
    // add player potion
    // this.potion = new Potion(this);
    // add color system
    this.colorSystem = new ColorSystem(this);
  }

  create() {
    // TODO: implement controls
    // this.input.on('pointerdown', () => {
    //   console.log('teste');
    //   this.potion.addColor('r');
    // });
    this.input.on('pointerdown', () => {
      if (this.colorSystem.isOpen) {
        this.colorSystem.closeFaucet();
      } else {
        this.colorSystem.openFaucet();
        console.log(generatePotion());
      }
    });
    // FIXME: add target potion
    // add target potion
    // this.targetPotion = new TargetPotion(
    //   this,
    //   'Poção do Amor',
    //   'rgb(255, 0, 0)'
    // );
  }

  update() {}
}

export default Game;
