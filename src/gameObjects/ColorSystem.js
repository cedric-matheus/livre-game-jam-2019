import Phaser from 'phaser';

import { DEFAULT_HEIGHT, MAX_COLOR_LIMIT, MIN_COLOR_LIMIT } from '../config';

class ColorSystem extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene);

    scene.input.addPointer(2);

    const pipeHeight = 921;
    const pipeWidth = 986;
    const pipeX = pipeWidth / 2;
    const pipeY = DEFAULT_HEIGHT * 0.48;

    // const handwheelWidth = 265;
    // const handwheelHeight = 265;
    const handwheelX = pipeWidth * 0.56;
    const handwheelY = DEFAULT_HEIGHT - pipeHeight * 0.98;

    const jetX = pipeWidth * 0.948;
    const jetY = pipeY * 0.9;

    const jetBrightX = pipeWidth * 0.948;
    const jetBrightY = pipeY * 0.9;

    const colorSwatchX = pipeWidth * 0.175;
    const colorSwatchY = pipeHeight * 0.62;

    const colorSwatchFluidX = colorSwatchX + 25;
    const colorSwatchFluidY = colorSwatchY - 45;

    const colorSwatchLenX = colorSwatchFluidX;
    const colorSwatchLenY = colorSwatchFluidY + 19;

    const stopperX = 450;
    const stopperY = 900;

    const closedStopperX = 940;
    const closedStopperY = 370;

    // add toggle valve sound
    this.toggleValveSound = scene.sound.add('toggleValve');
    // add change color sound
    this.changeColorSound = scene.sound.add('changeColor');
    // add cork sound close bottle
    this.closeBottleSound = scene.sound.add('cork');

    this.colorPosition = 0;
    this.colors = ['r', 'g', 'b'];
    this.totalColors = this.colors.length;

    /*
     * handwhell status
     * closed
     * opened
     * opening
     * closing
     */
    this.handwheelStatus = 'closed';

    this.jetParticlesX = jetX;
    this.jetParticlesY = jetY * 0.6;

    // create jet
    this.jet = scene.add.image(jetX, jetY, 'jet');
    // tint jet
    this.jet.setTint(this.getColorInteger());
    // create jet bright
    this.jetBright = scene.add.image(jetBrightX, jetBrightY, 'jetBright');

    // create jet particles
    this.jetParticles = scene.add.particles('jetParticles');
    // create jet particles emmiter
    this.jetParticlesEmitter = this.jetParticles.createEmitter({
      x: this.jetParticlesX,
      y: this.jetParticlesY,
      quantity: 2,
      frequency: 2,
      angle: { min: 89, max: 91 },
      speed: 300,
      gravityY: 300,
      lifespan: { min: 1000, max: 2000 },
    });
    // disable jet particles emmiter
    this.jetParticlesEmitter.stop();
    // disable jet particle visibility
    this.jetParticles.visible = false;
    // add mask to jet
    this.jet.mask = new Phaser.Display.Masks.BitmapMask(
      scene,
      this.jetParticles
    );
    // add mask to jet bright
    this.jetBright.mask = new Phaser.Display.Masks.BitmapMask(
      scene,
      this.jetParticles
    );

    // add pipe
    this.pipe = scene.add.image(pipeX, pipeY, 'pipe');

    // add handwheel
    this.handwheel = scene.add.image(handwheelX, handwheelY, 'handwheel');
    // create handwheel hit area
    const handWheelFrame = this.handwheel.frame;
    const handwheelHitArea = new Phaser.Geom.Rectangle(
      handWheelFrame.x,
      handWheelFrame.y,
      handWheelFrame.width,
      handWheelFrame.height
    );
    this.handwheel.setInteractive(
      handwheelHitArea,
      Phaser.Geom.Rectangle.Contains
    );
    // add handle events to handwheel
    this.handwheel.on('pointerdown', () => this.toggleFaucet());
    this.handwheel.on('pointerover', (pointer) => {
      if (pointer.isDown) {
        this.toggleFaucet();
      }
    });

    // add color swatch
    this.colorSwatch = scene.add.image(
      colorSwatchX,
      colorSwatchY,
      'colorSwatch'
    );
    // create color swatch hit area
    const colorSwatchFrame = this.colorSwatch.frame;
    const colorSwatchHitArea = new Phaser.Geom.Rectangle(
      colorSwatchFrame.x,
      colorSwatchFrame.y,
      colorSwatchFrame.width,
      colorSwatchFrame.height
    );
    this.colorSwatch.setInteractive(
      colorSwatchHitArea,
      Phaser.Geom.Rectangle.Contains
    );
    // add handle events to color swatch
    this.colorSwatch.on('pointerdown', () => this.changeColor());
    this.colorSwatch.on('pointerover', (pointer) => {
      if (pointer.isDown) {
        this.changeColor();
      }
    });

    // add color swatch fluid
    this.colorSwatchFluid = scene.add.image(
      colorSwatchFluidX,
      colorSwatchFluidY,
      'colorSwatchFluid'
    );
    // tint color swatch fluid
    this.colorSwatchFluid.setTint(this.getColorInteger());

    // add color swatch len
    this.colorSwatchLen = scene.add.image(
      colorSwatchLenX,
      colorSwatchLenY,
      'colorSwatchLen'
    );

    // add stopper
    this.stopper = scene.add.image(stopperX, stopperY, 'stopper');
    // create stopper hit area
    const stopperFrame = this.stopper.frame;
    const stopperHitArea = new Phaser.Geom.Rectangle(
      stopperFrame.x,
      stopperFrame.y,
      stopperFrame.width,
      stopperFrame.height
    );
    this.stopper.setInteractive(stopperHitArea, Phaser.Geom.Rectangle.Contains);
    // add handle events to stopper
    this.stopper.on('pointerdown', () => this.closeBottle());
    this.stopper.on('pointerover', (pointer) => {
      if (pointer.isDown) {
        this.closeBottle();
      }
    });

    // add closed stopper
    this.closedStopper = scene.add.image(
      closedStopperX,
      closedStopperY,
      'closedStopper'
    );
    // hide closed stopper
    this.closedStopper.setVisible(false);
  }

  toggleFaucet() {
    if (this.handwheelStatus === 'opened') {
      this.closeFaucet();
      // play toggle valve sound
      this.toggleValveSound.play();
    } else if (this.handwheelStatus === 'closed') {
      this.openFaucet();
      // play toggle valve sound
      this.toggleValveSound.play();
    }
  }

  getColor() {
    return this.colors[this.colorPosition];
  }

  getRGB() {
    const color = this.getColor();
    switch (color) {
      case 'r':
        return `rgb(${MIN_COLOR_LIMIT}, ${MAX_COLOR_LIMIT}, ${MAX_COLOR_LIMIT})`;
      case 'g':
        return `rgb(${MAX_COLOR_LIMIT}, ${MIN_COLOR_LIMIT}, ${MAX_COLOR_LIMIT})`;
      case 'b':
        return `rgb(${MAX_COLOR_LIMIT}, ${MAX_COLOR_LIMIT}, ${MIN_COLOR_LIMIT})`;
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

    // tint color swatch fluid
    this.colorSwatchFluid.setTint(this.getColorInteger());
    // tint jet
    this.jet.setTint(this.getColorInteger());

    // play change color sound
    this.changeColorSound.play();
  }

  openFaucet() {
    this.isOpen = true;

    this.handwheelStatus = 'opening';

    setTimeout(() => (this.handwheelStatus = 'opened'), 1000);

    this.jetParticlesEmitter.start();
  }

  closeFaucet() {
    this.isOpen = false;

    this.handwheelStatus = 'closing';

    setTimeout(() => (this.handwheelStatus = 'closed'), 1000);

    this.jetParticlesEmitter.stop();
  }

  closeBottle() {
    this.closeBottleSound.play();
    this.scene.isEnd = true;
    this.stopper.setVisible(false);
    this.closedStopper.setVisible(true);
  }
}

export default ColorSystem;
