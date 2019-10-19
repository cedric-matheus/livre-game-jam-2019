import Phaser from 'phaser';
// TODO: load webfonts
// import WebFont from 'webfontloader';

import { Potion, TargetPotion } from '../gameObjects';

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
  }

  create() {
    // add player potion
    this.potion = new Potion(this);

    // TODO: add target potion
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
