// TODO: Add start screen
// TODO: Add logo screen
// TODO: change loading screen
// TODO: Add sound of book and new valve

import '../assets/scss/fonts.scss';

import Phaser from 'phaser';

import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from '../config';

import { Potion, TargetPotion, ColorSystem, PopUp } from '../gameObjects';
import { colorCode, nameGen, deltaE } from '../utils';

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

    this.isEnd = false;
    this.isLose = false;
    this.isRestartable = false;
  }

  getPercent(targetColor, potionColor) {
    const targetRGBArray = targetColor
      .replace('rgb(', '')
      .replace(')', '')
      .split(',');

    const potionRGBArray = potionColor
      .replace('rgb(', '')
      .replace(')', '')
      .split(',');

    // console.log(deltaE(potionRGBArray, targetRGBArray));
    // Essa função retorna a porcentagem de semelhança
    return deltaE(potionRGBArray, targetRGBArray);

    // const rDiff = this.getPencertDifference(
    //   targetRGBArray[0],
    //   potionRGBArray[0]
    // );

    // const gDiff = this.getPencertDifference(
    //   targetRGBArray[1],
    //   potionRGBArray[1]
    // );

    // const bDiff = this.getPencertDifference(
    //   targetRGBArray[2],
    //   potionRGBArray[2]
    // );

    // const totalPercent = parseInt(Math.abs((rDiff + gDiff + bDiff) / 3));

    // return totalPercent;
  }

  getPencertDifference(v1, v2) {
    const A = Math.abs(v1 - v2);
    const B = (v1 + v2) / 2;
    const C = A / B;

    return C * 1000;
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
    // music config
    const musicConfig = { loop: true };
    // liquid sound config
    const liquidSoundConfig = { loop: true };
    // add music
    this.music = this.sound.add('music', musicConfig);
    // play music
    this.music.play();
    // add liquid falling sound
    this.liquidFallingSound = this.sound.add(
      'liquidFalling',
      liquidSoundConfig
    );
    // add target potion
    const color = colorCode();
    const name = nameGen();
    console.log(name, color);
    this.targetPotion = new TargetPotion(this, name, color);

    // add pop up
    this.popUp = new PopUp(this, color);

    this.lightEffects = this.add.image(1895 / 2, 996 / 2, 'lightEffects');
    this.borderShadow = this.add.image(1920 / 2, 1080 / 2, 'borderShadow');
  }

  update() {
    if (this.targetPotion.timer <= 0) {
      this.isEnd = true;
      this.isLose = true;
    }

    if (this.isEnd) {
      const percent = this.getPercent(
        this.potion.color.getRGB(),
        this.targetPotion.targetColor
      );
      this.targetPotion.stopTimer();

      this.input.clear(this.colorSystem.handwheel);
      this.input.clear(this.colorSystem.colorSwatch);
      this.input.clear(this.colorSystem.stopper);
      this.input.clear(this.targetPotion.scroll);
      if (!this.isRestartable) {
        this.popUp.showPopUp(this.isLose, this.potion.color.getRGB());
      }
      this.isRestartable = true;
    }

    if (this.colorSystem.handwheelStatus === 'opened') {
      this.potion.addColor(this.colorSystem.getColor());
      if (!this.liquidFallingSound.isPlaying) this.liquidFallingSound.play();
    } else if (this.colorSystem.handwheelStatus === 'closing') {
      const handwheelNewAngle = (this.colorSystem.handwheel.angle -= this.handwheelRotationSpeed);
      this.colorSystem.handwheel.setAngle(handwheelNewAngle);
    } else if (this.colorSystem.handwheelStatus === 'opening') {
      const handwheelNewAngle = (this.colorSystem.handwheel.angle += this.handwheelRotationSpeed);
      this.colorSystem.handwheel.setAngle(handwheelNewAngle);
    } else {
      if (this.liquidFallingSound.isPlaying) this.liquidFallingSound.stop();
    }
  }
}

export default Game;
