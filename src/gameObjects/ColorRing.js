import Phaser from 'phaser';

class ColorRing extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene);

    this.color = 'r';
    this.colors = ['r', 'g', 'b'];
  }

  openTap() {
    return null;
  }
}

export default ColorRing;
