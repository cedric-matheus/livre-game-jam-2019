import Phaser from 'phaser';

import scenes from './scenes';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: scenes,
};

export default config;
