import Phaser from 'phaser';

import { DEFAULT_HEIGHT } from '../config';

class ColorSystem extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene);

    this.colorPosition = 0;
    this.colors = ['r', 'g', 'b'];
    this.totalColors = this.colors.length;
    this.isOpen = false;

    const pipeHeight = 921;
    const pipeWidth = 986;
    const pipeX = pipeWidth / 2;
    const pipeY = DEFAULT_HEIGHT * 0.48;

    const handwheelWidth = 265;
    const handwheelHeight = 265;
    const handwheelX = pipeWidth * 0.56;
    const handwheelY = DEFAULT_HEIGHT - pipeHeight * 0.98;

    const colorDropX = pipeX + 100;
    const colorDropY = pipeY - 35;

    const colorSelectX = 100;
    const colorSelectY = 600;

    this.colorDropX = colorDropX;
    this.colorDropY = colorDropY;

    // add pipe
    this.pipe = scene.add.image(pipeX, pipeY, 'pipe');

    // add handwheel
    this.handwheel = scene.add.image(handwheelX, handwheelY, 'handwheel');

    // add color select
    this.colorSelect = scene.add.image(
      colorSelectX,
      colorSelectY,
      'colorSelect'
    );
    // tint color select
    this.colorSelect.setTint(this.getColorInteger());

    // create drop particles
    this.particles = scene.add.particles('colorDrop');
    // create drop emmiter
    this.emitter = this.particles.createEmitter({
      x: colorDropX,
      y: colorDropY,
      tint: this.getColorInteger(),
      quantity: 5,
      frequency: 25,
      angle: { min: 86, max: 94 },
      speed: 200,
      gravityY: 200,
      lifespan: { min: 1000, max: 2000 },
    });
    // disable drop emmiter
    this.emitter.stop();
  }

  getRGB() {
    const color = this.colors[this.colorPosition];
    switch (color) {
      case 'r':
        return 'rgb(255, 0, 0)';
      case 'g':
        return 'rgb(0, 255, 0)';
      case 'b':
        return 'rgb(0, 0, 255)';
    }
  }

  getColorInteger() {
    return Phaser.Display.Color.RGBStringToColor(this.getRGB()).color;
  }

  changeColor() {
    this.colorPosition++;

    if (this.colorPosition === this.totalColors) {
      this.colorPosition = 0;
    }

    // tint color select
    this.colorSelect.setTint(this.getColorInteger());
    // create drop emmiter
    this.emitter = this.particles.createEmitter({
      x: this.colorDropX,
      y: this.colorDropY,
      tint: this.getColorInteger(),
      quantity: 5,
      frequency: 25,
      angle: { min: 86, max: 94 },
      speed: 200,
      gravityY: 200,
      lifespan: { min: 1000, max: 2000 },
    });
    // disable drop emmiter
    this.emitter.stop();
  }

  openFaucet() {
    this.isOpen = true;

    this.colorHandwheel.setRotation(5);

    this.emitter.start();
  }

  closeFaucet() {
    this.isOpen = false;

    this.colorHandwheel.setRotation(0);

    this.emitter.stop();

    this.changeColor();
  }
}

export default ColorSystem;
