import Phaser from 'phaser';

import logoImg from '../assets/images/logo.png';

// configure game and load loading asset
class BootGame extends Phaser.Scene {
  constructor() {
    // set scene key
    super('BootGame');
  }

  preload() {
    // asset used in loading
    this.load.image('logo', logoImg);
  }

  create() {
    // start preload scene
    this.scene.start('Game');
  }
}

export default BootGame;
