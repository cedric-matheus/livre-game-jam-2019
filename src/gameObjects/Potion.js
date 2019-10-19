import Phaser from 'phaser';

class Potion extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene);

    this.color = null;
  }

  addColor(color) {
    return false;
  }

  closeBottle() {
    return false;
  }
}

export default Potion;
