import Phaser from 'phaser';
import WebFont from 'webfontloader';

class TargetPotion extends Phaser.GameObjects.Sprite {
  constructor(scene, title = null, targetColor = null) {
    super(scene);

    scene.input.addPointer(1);

    const scrollX = 1520;
    const scrollY = 740;

    const scrollColorSpotX = 1600;
    const scrollColorSpotY = 800;

    const helpX = 1594 / 2 + 310;
    const helpY = 790 / 2 + 50;

    this.title = title;
    this.targetColor = targetColor;

    // add scroll
    this.scroll = scene.add.image(scrollX, scrollY, 'scroll');
    // create scroll hit area
    const scrollFrame = this.scroll.frame;
    const scrollHitArea = new Phaser.Geom.Rectangle(
      scrollFrame.x,
      scrollFrame.y,
      scrollFrame.width,
      scrollFrame.height
    );
    this.scroll.setInteractive(scrollHitArea, Phaser.Geom.Rectangle.Contains);
    // add handle events to scroll
    this.scroll.on('pointerdown', () => this.toggleHelp());
    this.scroll.on('pointerover', (pointer) => {
      if (pointer.isDown) {
        this.toggleHelp();
      }
    });

    // add scroll color spot
    this.scrollColorSpot = scene.add.image(
      scrollColorSpotX,
      scrollColorSpotY,
      'scrollColorSpot'
    );

    // tint scroll color spot
    this.scrollColorSpot.setTint(this.getColorInteger());

    // add potion title
    WebFont.load({
      custom: {
        families: ['KidsZone', 'PeaceSans'],
      },
      active: () => {
        scene.add.text(500, 500, this.title, {
          fontFamily: 'PeaceSans',
          fontSize: 80,
          color: '#ff0000',
        });
      },
    });

    // add help
    this.help = scene.add.image(helpX, helpY, 'help');
    // hidden help
    this.toggleHelp();
  }

  toggleHelp() {
    this.help.setVisible(!this.help.visible);
  }

  getColorInteger() {
    return Phaser.Display.Color.RGBStringToColor(this.targetColor).color;
  }

  // TODO: return rgb array
  getRGBArray() {
    return false;
  }
}

export default TargetPotion;
