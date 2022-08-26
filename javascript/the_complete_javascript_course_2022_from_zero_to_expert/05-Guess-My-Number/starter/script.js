'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
// console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 17; */

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;

function updateScore(message) {
  score > 0 ? score-- : (score = 0);
  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = score;
}

function updateHighscore() {
  score > highScore ? (highScore = score) : -1;
}

document.querySelector('body').addEventListener('load', function () {
  document.querySelector('.guess').value = '';
  console.log('carregando...');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (guess < 1) {
      //When there is no input
      document.querySelector('.message').textContent = '❌ Less than 1.';
    } else if (guess === secretNumber) {
      //When player wins
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      updateHighscore();
      document.querySelector('.highscore').textContent = highScore;
    } else if (guess !== secretNumber) {
      //When player is wrong
      guess > secretNumber
        ? updateScore('🔼 Too high!')
        : updateScore('🔽 Too low!');
    }
  } else {
    document.querySelector('.message').textContent = '💥 You lose!!!';
    updateScore();
  }
});

//When player press Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  (document.querySelector('.guess').value = ''),
    document.querySelector('.guess').focus();
  document.querySelector('.score').textContent = score;
});
