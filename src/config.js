import Phaser from 'phaser';

import scenes from './scenes';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1920,
  height: 1080,
  scene: scenes,
};

export default config;
