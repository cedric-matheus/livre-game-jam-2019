import Phaser from 'phaser';
import WebFont from 'webfontloader';

class PopUp extends Phaser.GameObjects.Sprite {
  constructor(scene, isLose, colorPercent = 0) {
    super(scene);

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

    const winPercentTextString = `${colorPercent}%`;
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

    // add potion title and timer
    WebFont.load({
      custom: {
        families: ['KidsZone', 'PeaceSans'],
      },
      active: () => {
        if (isLose) {
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
        } else {
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
        }
      },
    });
  }
}

export default PopUp;
