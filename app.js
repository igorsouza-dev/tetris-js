'use strict';
function createGridDivs() {
  let grid = document.querySelector('.grid');

  let i = 0;
  let array = [];
  while (i < 199) {
    array.push(grid.appendChild(document.createElement('div')));
    i++;
  }
  return array;
}
document.addEventListener('DOMContentLoaded', () => {
  let squares = createGridDivs();
  console.log(squares);
  //let squares = Array.from(document.querySelector('.grid div'));
  const ScoreDisplay = document.querySelector('#score');
  const StartButton = document.querySelector('.start-button');

  const width = 10;
});
