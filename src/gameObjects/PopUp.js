import Phaser from 'phaser';
import WebFont from 'webfontloader';

class PopUp extends Phaser.GameObjects.Sprite {
  constructor(scene, targetColor) {
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

    const winTopTextString = 'POÇÃO';
    const winTopTextX = popUpX;
    const winTopTextY = popUpY - 150;
    const winTopTextFont = 40;

    const winRGBPotionTextString = '(1, 1, 1)';
    const winRGBPotionTextX = winTopTextX;
    const winRGBPotionTextY = winTopTextY + 70;
    const winRGBPotionTextFont = 80;

    const winBottomTextString = 'RECEITA';
    const winBottomTextX = winRGBPotionTextX;
    const winBottomTextY = winRGBPotionTextY + 70;
    const winBottomTextFont = 45;

    const winRGBTargetTextString = `${targetColor.replace('rgb', '')}`;
    const winRGBTargetTextX = winBottomTextX;
    const winRGBTargetTextY = winBottomTextY + 70;
    const winRGBTargetTextFont = 80;

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

        // create win RGBTarget text
        this.winRGBTargetText = scene.add.text(
          winRGBTargetTextX,
          winRGBTargetTextY,
          winRGBTargetTextString,
          {
            fontFamily: 'PeaceSans',
            fontSize: winRGBTargetTextFont,
            color: '#251505',
            align: 'center',
            wordWrap: { width: 665, useAdvancedWrap: true },
          }
        );
        // adjust win RGBTarget text
        this.winRGBTargetText.setOrigin(0.5, 0.5);

        // create win RGBPotion text
        this.winRGBPotionText = scene.add.text(
          winRGBPotionTextX,
          winRGBPotionTextY,
          winRGBPotionTextString,
          {
            fontFamily: 'PeaceSans',
            fontSize: winRGBPotionTextFont,
            color: '#251505',
            align: 'center',
            wordWrap: { width: 665, useAdvancedWrap: true },
          }
        );
        // adjust win RGBPotion text
        this.winRGBPotionText.setOrigin(0.5, 0.5);

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
        this.winRGBPotionText.setVisible(false);
        this.winRGBTargetText.setVisible(false);
        this.winBottomText.setVisible(false);
      },
    });

    this.hidePopUp();
  }

  showPopUp(isLose, potionRGB) {
    this.isShowed = true;

    this.popUpBackground.setVisible(true);
    this.popUp.setVisible(true);
    this.playAgainButton.setVisible(true);
    if (isLose) {
      this.loseText.setVisible(true);
    } else {
      const winPotionRGB = potionRGB.replace('rgb', '');
      this.winRGBPotionText && this.winRGBPotionText.setText(winPotionRGB);

      this.winTopText.setVisible(true);
      this.winRGBPotionText.setVisible(true);
      this.winRGBTargetText.setVisible(true);
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
