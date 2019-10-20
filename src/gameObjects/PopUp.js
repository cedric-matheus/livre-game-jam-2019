import Phaser from 'phaser';
import WebFont from 'webfontloader';

class PopUp extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene);

    scene.input.addPointer(1);

    const popUpBackgroundX = 1920 / 2;
    const popUpBackgroundY = 1080 / 2;

    const popUpX = 1920 / 2;
    const popUpY = 1080 / 2;

    const playAgainButtonX = popUpX;
    const playAgainButtonY = popUpY + 160;

    const loseTextString = 'O TEMPO ACABOU E VOCÊ NÃO CONSEGUIU!';
    const loseTextX = popUpX;
    const loseTextY = popUpY - 50;
    const loseTextFont = 65;

    const winTopTextString = 'SUA POÇÃO ESTÁ';
    const winTopTextX = popUpX;
    const winTopTextY = popUpY - 150;
    const winTopTextFont = 40;

    const winPercentTextString = `${0}%`;
    const winPercentTextX = winTopTextX;
    const winPercentTextY = winTopTextY + 110;
    const winPercentTextFont = 180;

    const winBottomTextString = 'IGUAL A RECEITA';
    const winBottomTextX = winPercentTextX;
    const winBottomTextY = winPercentTextY + 110;
    const winBottomTextFont = 55;

    // add pop up background
    this.popUpBackground = scene.add.image(
      popUpBackgroundX,
      popUpBackgroundY,
      'popUpBackground'
    );

    // add pop up background
    this.popUp = scene.add.image(popUpX, popUpY, 'popUp');

    // add play again button
    this.playAgainButton = scene.add.image(
      playAgainButtonX,
      playAgainButtonY,
      'playAgainButton'
    );
    // create playAgainButton hit area
    const playAgainButtonFrame = this.playAgainButton.frame;
    const playAgainButtonHitArea = new Phaser.Geom.Rectangle(
      playAgainButtonFrame.x,
      playAgainButtonFrame.y,
      playAgainButtonFrame.width,
      playAgainButtonFrame.height
    );
    this.playAgainButton.setInteractive(
      playAgainButtonHitArea,
      Phaser.Geom.Rectangle.Contains
    );
    // add handle events to playAgainButton
    this.playAgainButton.on('pointerdown', () => this.playAgain());
    this.playAgainButton.on('pointerover', (pointer) => {
      if (pointer.isDown) {
        this.playAgain();
      }
    });

    // add potion title and timer
    WebFont.load({
      custom: {
        families: ['KidsZone', 'PeaceSans'],
      },
      active: () => {
        // create loseText
        this.loseText = scene.add.text(loseTextX, loseTextY, loseTextString, {
          fontFamily: 'PeaceSans',
          fontSize: loseTextFont,
          color: '#500D02',
          align: 'center',
          wordWrap: { width: 650, useAdvancedWrap: true },
        });
        // adjust lose text
        this.loseText.setOrigin(0.5, 0.5);

        // create win top text
        this.winTopText = scene.add.text(
          winTopTextX,
          winTopTextY,
          winTopTextString,
          {
            fontFamily: 'PeaceSans',
            fontSize: winTopTextFont,
            color: '#500D02',
            align: 'center',
            wordWrap: { width: 665, useAdvancedWrap: true },
          }
        );
        // adjust win top text
        this.winTopText.setOrigin(0.5, 0.5);

        // create win percent text
        this.winPercentText = scene.add.text(
          winPercentTextX,
          winPercentTextY,
          winPercentTextString,
          {
            fontFamily: 'PeaceSans',
            fontSize: winPercentTextFont,
            color: '#251505',
            align: 'center',
            wordWrap: { width: 665, useAdvancedWrap: true },
          }
        );
        // adjust win percent text
        this.winPercentText.setOrigin(0.5, 0.5);

        // create win bottom text
        this.winBottomText = scene.add.text(
          winBottomTextX,
          winBottomTextY,
          winBottomTextString,
          {
            fontFamily: 'PeaceSans',
            fontSize: winBottomTextFont,
            color: '#500D02',
            align: 'center',
            wordWrap: { width: 665, useAdvancedWrap: true },
          }
        );
        // adjust win bottom text
        this.winBottomText.setOrigin(0.5, 0.5);

        this.loseText.setVisible(false);
        this.winTopText.setVisible(false);
        this.winPercentText.setVisible(false);
        this.winBottomText.setVisible(false);
      },
    });

    this.hidePopUp();
  }

  showPopUp(isLose, percent = 0) {
    this.isShowed = true;

    this.popUpBackground.setVisible(true);
    this.popUp.setVisible(true);
    this.playAgainButton.setVisible(true);
    if (isLose) {
      this.loseText.setVisible(true);
    } else {
      const percentText = `${percent}%`;
      this.winPercentText && this.winPercentText.setText(percentText);

      this.winTopText.setVisible(true);
      this.winPercentText.setVisible(true);
      this.winBottomText.setVisible(true);
    }
  }

  hidePopUp() {
    this.isShowed = false;
    this.popUpBackground.setVisible(false);
    this.popUp.setVisible(false);
    this.playAgainButton.setVisible(false);
  }

  playAgain() {
    // restart game
    this.scene.scene.start('BootGame');
  }
}

export default PopUp;
