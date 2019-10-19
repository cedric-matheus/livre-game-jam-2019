import Phaser from 'phaser';

class TargetPotion extends Phaser.GameObjects.Sprite {
  constructor(scene, title = null, targetColor = null) {
    super(scene);

    this.title = title;
    this.targetColor = title;

    // add wood plank
    this.woodPlank = scene.add.image(400, 300, 'woodPlank');
    // add to scene
    scene.add.existing(this);
  }
}

export default TargetPotion;
