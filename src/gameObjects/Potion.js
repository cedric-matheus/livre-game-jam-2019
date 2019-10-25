import Phaser from 'phaser';

import { MAX_COLOR_LIMIT, MIN_COLOR_LIMIT } from '../config';

class Potion extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene);

    this.color = {
      r: MAX_COLOR_LIMIT,
      g: MAX_COLOR_LIMIT,
      b: MAX_COLOR_LIMIT,
      getRGB: () => `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`,
    };

    const X = 935;
    const Y = 650;

    const bottleBackX = X;
    const bottleBackY = Y;

    const bottleFluidX = bottleBackX;
    const bottleFluidY = bottleBackY + 130;

    this.bottleFrontX = bottleBackX;
    this.bottleFrontY = bottleBackY;

    this.bottleFluidBrightX = 925;
    this.bottleFluidBrightY = 925;

    // add bottle back
    this.bottleBack = scene.add.image(bottleBackX, bottleBackY, 'bottleBack');
    // add bottle fluid
    this.bottleFluid = scene.add.image(
      bottleFluidX,
      bottleFluidY,
      'bottleFluid'
    );
    // tint bottle fluid
    this.bottleFluid.setTint(this.getColorInteger());
  }

  getColorInteger() {
    return Phaser.Display.Color.RGBStringToColor(this.color.getRGB()).color;
  }

  addColor(color) {
    switch (color) {
      case 'r':
        if (this.color.r > MIN_COLOR_LIMIT) this.color.r--;
        break;
      case 'g':
        if (this.color.g > MIN_COLOR_LIMIT) this.color.g--;
        break;
      case 'b':
        if (this.color.b > MIN_COLOR_LIMIT) this.color.b--;
        break;
    }

    // tint bottle fluid bright
    this.bottleFluidBright.setTint(this.getColorInteger());
    // tint bottle fluid
    this.bottleFluid.setTint(this.getColorInteger());
  }
}

export default Potion;
