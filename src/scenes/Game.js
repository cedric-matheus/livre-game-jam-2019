import Phaser from 'phaser';
// TODO: load webfonts
// import WebFont from 'webfontloader';
import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from '../config';

import { Potion, TargetPotion, ColorSystem } from '../gameObjects';

class Game extends Phaser.Scene {
  constructor() {
    // set scene key
    super('Game');

    this.backgroundX = DEFAULT_WIDTH / 2;
    this.backgroundY = DEFAULT_HEIGHT / 2;

    this.tableHeight = 284;
    this.tableWidth = 1867;
    this.tableX =
      DEFAULT_WIDTH -
      this.tableWidth / 2 -
      (DEFAULT_WIDTH - this.tableWidth) / 2;
    this.tableY = DEFAULT_HEIGHT - this.tableHeight / 2;
  }

  preload() {
    // create background
    this.background = this.add.image(
      this.backgroundX,
      this.backgroundY,
      'background'
    );
    // create table
    this.table = this.add.image(this.tableX, this.tableY, 'table');
    // TODO: load webfonts
    // // load fonts
    // WebFont.load({
    //   google: {
    //     families: ['Droid Sans', 'Droid Serif'],
    //   },
    // });
    // FIXME: add potion
    // add player potion
    // this.potion = new Potion(this);
    // FIXME: add color system
    // add color system
    this.colorSystem = new ColorSystem(this);
  }

  create() {
    // TODO: implement controls
    // this.input.on('pointerdown', () => {
    //   console.log('teste');
    //   this.potion.addColor('r');
    // });
    // this.input.on('pointerdown', () => {
    //   if (this.colorSystem.isOpen) {
    //     this.colorSystem.closeFaucet();
    //   } else {
    //     this.colorSystem.openFaucet();
    //   }
    // });
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
