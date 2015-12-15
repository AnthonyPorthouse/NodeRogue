'use strict';

let blessed = require('blessed');

let screen = blessed.screen({
  smartCSR: true
});

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  return process.exit(0);
});
screen.enableMouse();

screen.title = 'NodeRogue';

let box = blessed.box({
  top: '25%',
  left: 'center',
  width: '50%',
  height: 4,
  content: '{bold}NodeRogue{/bold}\nA RogueLike In NodeJS',
  tags: true,
  border: {
    type: 'line'
  },
  align: 'center'
});
screen.append(box);

let start = blessed.box({
  top: 'center',
  left: 'center',
  width: 'shrink',
  height: 3,
  content: 'New Game',
  tags: true,
  border: {
    type: 'line',
  },
  align: 'center'
});

start.on('hover')
screen.append(start);

screen.render();
