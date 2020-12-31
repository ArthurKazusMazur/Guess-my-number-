'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
function displayContent(element, content) {
  document.querySelector(element).textContent = content;
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayContent('.message', 'Start guessing...');
  displayContent('.score', score);
  displayContent('.number', '?');
  document.querySelector('.guess').value = '';

  // css
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayContent('.message', '⛔ No number!');
  } else if (guess === secretNumber) {
    displayContent('.message', '🎆 Correct number!');
    displayContent('.number', secretNumber);

    // Manipulating css style
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayContent('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayContent('.message', guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayContent('.score', score);
    } else {
      displayContent('.message', '💥 You lost the game!');
      displayContent('.score', 0);
    }
  }
});
