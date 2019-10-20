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

    this.handwheelRotationSpeed = 4;
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
    // add potion
    this.potion = new Potion(this);
    // add color system
    this.colorSystem = new ColorSystem(this);
    // add potion bottle front
    this.potion.bottleFront = this.add.image(
      this.potion.bottleFrontX,
      this.potion.bottleFrontY,
      'bottleFront'
    );
  }

  create() {
    // FIXME: add target potion
    // add target potion
    // this.targetPotion = new TargetPotion(
    //   this,
    //   'Poção do Amor',
    //   'rgb(255, 0, 0)'
    // );
  }

  update() {
    if (this.colorSystem.handwheelStatus === 'opened') {
      this.potion.addColor(this.colorSystem.getColor());
    } else if (this.colorSystem.handwheelStatus === 'closing') {
      const handwheelNewAngle = (this.colorSystem.handwheel.angle -= this.handwheelRotationSpeed);
      this.colorSystem.handwheel.setAngle(handwheelNewAngle);
    } else if (this.colorSystem.handwheelStatus === 'opening') {
      const handwheelNewAngle = (this.colorSystem.handwheel.angle += this.handwheelRotationSpeed);
      this.colorSystem.handwheel.setAngle(handwheelNewAngle);
    }
  }
}

export default Game;
