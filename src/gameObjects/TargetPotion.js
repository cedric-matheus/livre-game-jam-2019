import Phaser from 'phaser';

class TargetPotion extends Phaser.GameObjects.Sprite {
  constructor(scene, title = null, targetColor = null) {
    super(scene);

    const plankX = 400;
    const plankY = 300;

    const bottleWidth = 82;
    const bottleHeight = 180;

    const addYBottle = 100;

    const maskWidth = 82;
    const maskHeight = 110;

    const targetColorInteger = Phaser.Display.Color.RGBStringToColor(
      targetColor
    ).color;

    this.title = title;
    this.targetColor = targetColor;

    // add wood plank
    this.woodPlank = scene.add.image(plankX, plankY, 'woodPlank');
    // add potion bottle
    this.potionBottle = scene.add.image(
      plankX,
      plankY + addYBottle,
      'emptyBottle'
    );
    // add potion fluid
    this.potionFluid = scene.add.image(
      plankX,
      plankY + addYBottle,
      'emptyBottle'
    );
    // create mask
    this.maskShape = scene.add.graphics();
    // add color and fill style
    this.maskShape.fillStyle('rgb(0, 0, 0)', 0);
    // draw rect
    this.maskShape.fillRect(
      plankX - maskWidth / 2,
      plankY - (maskHeight / 2 - (bottleHeight - maskHeight) / 2) + addYBottle,
      maskWidth,
      maskHeight
    );
    // add mask to potion fluid
    this.potionFluid.mask = new Phaser.Display.Masks.GeometryMask(
      scene,
      this.maskShape
    );
    // tint potion fluid
    this.potionFluid.setTint(targetColorInteger);
    // add title text
    scene.add.text(150, 350, 'Waves flung themselves\nat the blue evening.', {
      fontFamily: 'Modak',
      fontSize: 64,
      color: '#5656ee',
    });
  }
}

export default TargetPotion;
