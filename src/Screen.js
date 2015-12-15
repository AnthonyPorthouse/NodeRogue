'use strict';

let blessed = require('blessed');

let screen = blessed.screen({
  smartCSR: true
});

screen.title = 'NodeRogue';

let box = blessed.box({
  top: 'center',
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
screen.render();
