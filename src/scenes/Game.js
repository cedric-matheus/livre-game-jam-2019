// TODO: Add win screen
// TODO: Add game logic
// TODO: Add sounds
// TODO: Add music

import '../assets/scss/fonts.scss';

import Phaser from 'phaser';

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

  init() {
    //  Inject our CSS
    var element = document.createElement('style');

    document.head.appendChild(element);

    var sheet = element.sheet;

    var styles =
      '@font-face { font-family: "KidsZone"; src: url("fonts/KidsZone.otf") format("opentype"); }\n';

    sheet.insertRule(styles, 0);

    styles =
      '@font-face { font-family: "PeaceSans"; src: url("fonts/PeaceSans.otf") format("opentype"); }';

    sheet.insertRule(styles, 0);
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
    // add bottle fluid bright
    this.potion.bottleFluidBright = this.add.image(
      this.potion.bottleFluidBrightX,
      this.potion.bottleFluidBrightY,
      'bottleFluidBright'
    );
    // tint bottle fluid bright
    this.potion.bottleFluidBright.setTint(this.potion.getColorInteger());
  }

  create() {
    // add target potion
    this.targetPotion = new TargetPotion(
      this,
      'Poção do Amor',
      'rgb(220, 50, 50)'
    );
    // KidsZone
    // PeaceSans
    // add title text
    // this.add.text(500, 500, 'Teste', {
    //   fontFamily: 'KidsZone',
    //   fontSize: 400,
    //   color: '#fff',
    // });

    this.lightEffects = this.add.image(1895 / 2, 996 / 2, 'lightEffects');
    this.borderShadow = this.add.image(1920 / 2, 1080 / 2, 'borderShadow');
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
