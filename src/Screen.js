'use strict';

let blessed = require('blessed');

let screen = blessed.screen({
  smartCSR: true
});

screen.key(['escape', 'q', 'C-c'], function () {
  return process.exit(0);
});
screen.enableInput();

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
  padding: {
    left: 1,
    right: 1
  },
  content: 'New Game',
  clickable: true,
  tags: true,
  border: {
    type: 'line'
  },
  align: 'center',
  style: {
    fg: 'white',
    bg: 'black',
    border: {
      fg: 'white',
      bg: 'black'
    },
    hover: {
      fg: 'black',
      bg: 'white',
      border: {
        fg: 'black',
        bg: 'white'
      }
    }
  }
});

screen.append(start);

screen.render();
