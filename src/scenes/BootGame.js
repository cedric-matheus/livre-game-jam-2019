import Phaser from 'phaser';

import Game from './Game';

import logoImg from '../assets/images/eclipse.png';

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
    // destroy scene
    this.scene.remove('Game');
    // create scene
    this.scene.add('Game', Game);
    // start preload scene
    this.scene.start('Game');
  }
}

export default BootGame;
