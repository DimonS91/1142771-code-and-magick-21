'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const BAR_GAP = 50;
const TEXT_HEIGHT = 20;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

const getMaxElement = (arr) => {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = (ctx, players, times) => {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  const maxTime = getMaxElement(times);

  let cssHSL = () => {
    return "hsl(" + 233 + ',' + (100 * Math.random()) + '%,' + (100 * Math.random()) + '%)';
  };

  for (let i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = cssHSL();
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, BAR_GAP + GAP * 4 + BAR_HEIGHT + CLOUD_Y, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
  }

  for (let i = 0; i < players.length; i++) {
    let roundTime = Math.round(times[i]);
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);
    ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 5);
    ctx.fillText(roundTime, CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, -((BAR_HEIGHT * times[i]) / maxTime) + BAR_HEIGHT + BAR_GAP + GAP * 4);
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + BAR_GAP + BAR_HEIGHT + TEXT_HEIGHT + GAP * 4);
  }
};
