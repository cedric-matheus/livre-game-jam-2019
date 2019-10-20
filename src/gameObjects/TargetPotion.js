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

    const titleTextX = 1490;
    const titleTextY = 640;
    const titleTextAngle = -12;
    const titleTextFont = 42;

    const timerTotal = 15;
    const timerTextX = 1620;
    const timerTextY = -20;
    const timerTextFont = 150;

    this.timer = timerTotal;
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

    // add potion title and timer
    WebFont.load({
      custom: {
        families: ['KidsZone', 'PeaceSans'],
      },
      active: () => {
        // create titleText
        this.titleText = scene.add.text(titleTextX, titleTextY, this.title, {
          fontFamily: 'KidsZone',
          fontSize: titleTextFont,
          color: '#251505',
          align: 'center',
          wordWrap: { width: 300, height: 500, useAdvancedWrap: true },
        });
        // adjust title text
        this.titleText.setOrigin(0.5, 0.5);
        this.titleText.setAngle(titleTextAngle);
        // create timer text
        this.timerText = scene.add.text(
          timerTextX,
          timerTextY,
          `${this.timer}`,
          {
            fontFamily: 'PeaceSans',
            fontSize: timerTextFont,
            color: '#eadbbd',
            align: 'right',
          }
        );
      },
    });

    // add help
    this.help = scene.add.image(helpX, helpY, 'help');
    // hidden help
    this.toggleHelp();

    // start timer
    this.startTimer();
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

  startTimer() {
    this.timeInterval = setInterval(() => {
      this.timer--;
      this.timerText.setText(this.timer);
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timeInterval);
  }
}

export default TargetPotion;
