import Phaser from 'phaser';

class Preload extends Phaser.Scene {
  constructor () {
    // set scene key
    super('Preload');
  }

  preload () {
    // show loading screen
    this.logo = this.add.image(400, 300, 'logo');

    // load game assets
  }

  create () {
    // start game scene
    this.scene.start('Game');
  }
}

export default Preload;
