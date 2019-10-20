import Phaser from 'phaser';

import scenes from './scenes';

export const DEFAULT_WIDTH = 1920;
export const DEFAULT_HEIGHT = 1080;
export const MAX_COLOR_LIMIT = 220;
export const MIN_COLOR_LIMIT = 50;
// const MAX_WIDTH = 1536;
// const MAX_HEIGHT = 864;
// const SCALE_MODE = 'SMOOTH'; // FIT OR SMOOTH

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  scene: scenes,
  // scale: {
  //   // we do scale the game manually in resize()
  //   mode: Phaser.Scale.FIT,
  //   width: DEFAULT_WIDTH,
  //   height: DEFAULT_HEIGHT,
  // },
};

export default config;
