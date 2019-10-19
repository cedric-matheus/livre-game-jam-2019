import Phaser from 'phaser';

class Potion extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene);

    this.color = {
      r: 0,
      g: 0,
      b: 0,
      getRGB: () => `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`,
    };

    const X = 400;
    const Y = 300;

    // const bottleWidth = 82;
    const bottleHeight = 180;

    const addYBottle = 100;

    const maskWidth = 82;
    const maskHeight = 110;

    // add potion bottle
    this.potionBottle = scene.add.image(X, Y + addYBottle, 'emptyBottle');
    // add potion fluid
    this.potionFluid = scene.add.image(X, Y + addYBottle, 'emptyBottle');
    // create mask
    this.maskShape = scene.add.graphics();
    // add color and fill style
    this.maskShape.fillStyle('rgb(0, 0, 0)', 0);
    // draw rect
    this.maskShape.fillRect(
      X - maskWidth / 2,
      Y - (maskHeight / 2 - (bottleHeight - maskHeight) / 2) + addYBottle,
      maskWidth,
      maskHeight
    );
    // add mask to potion fluid
    this.potionFluid.mask = new Phaser.Display.Masks.GeometryMask(
      scene,
      this.maskShape
    );
    // tint potion fluid
    this.potionFluid.setTint(this.getColorInteger());
  }

  getColorInteger() {
    return Phaser.Display.Color.RGBStringToColor(this.color.getRGB()).color;
  }

  addColor(color) {
    switch (color) {
      case 'r':
        this.color.r++;
        break;
      case 'g':
        this.color.g++;
        break;
      case 'b':
        this.color.b++;
        break;
    }

    console.log(this.color.getRGB());

    // tint potion fluid
    this.potionFluid.setTint(this.getColorInteger());
  }

  closeBottle() {
    return false;
  }
}

export default Potion;
