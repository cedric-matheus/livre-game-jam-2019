import Phaser from 'phaser';

import scenes from './scenes';

export const DEFAULT_WIDTH = 1920;
export const DEFAULT_HEIGHT = 1080;
export const MAX_COLOR_LIMIT = 240;
export const MIN_COLOR_LIMIT = 20;

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  scene: scenes,
  scale: {
    mode: Phaser.Scale.FIT,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
};

export default config;
