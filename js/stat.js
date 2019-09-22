'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var GAP_X = 50;
var GAP_BOTTOM = 20;
var FONT_BOTTOM_Y = CLOUD_HEIGHT - 5;
var FONT_GAP_TOP = 30;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var CAPTION_X = CLOUD_X + CLOUD_WIDTH/3;
var CAPTION_Y = 40;
var SUBTITLE_X = CLOUD_X + 10;
var SUBTITLE_Y = 60;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  if(arr.length > 0){
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  }
  else{
    return 'Error: Array is empty';
  }
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', CAPTION_X, CAPTION_Y);

  ctx.font = '16px PT Mono';
  ctx.fillText('Список результатов:', SUBTITLE_X, SUBTITLE_Y);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_X + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - FONT_GAP_TOP);
    if(players[i] === 'Вы'){
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else{
      ctx.fillStyle = 'hsl(246, ' + Math.round(Math.random() * 100) + '%, 50%)';
      console.log('hsl(246, ' + Math.round(Math.random() * 100) + '%, 50%)');
    }
    ctx.fillRect(CLOUD_X + GAP_X + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP_BOTTOM - BAR_HEIGHT * Math.round(times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(players[i], CLOUD_X + GAP_X + (GAP + BAR_WIDTH) * i, FONT_BOTTOM_Y);
  }
};
