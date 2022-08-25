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

function updateScore(){
    score > 0 ? score -- : score = 0;
    document.querySelector('.score').textContent = score;
}

function updateHighscore(){
    score > highScore ? highScore = score: -1;
}

const secretNumber = Math.trunc((Math.random() * 20) + 1);
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('body').addEventListener('load', function() {
    document.querySelector('.guess').value = '';
    console.log('carregando...');
});

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (score > 1) {

        if (guess < 1) {
            //When there is no input
            document.querySelector('.message').textContent = '❌ Less than 1.';
        } else if (guess === secretNumber) {
            //When player wins
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'
            document.querySelector('.number').textContent = secretNumber;
            updateHighscore();
            document.querySelector('.highscore').textContent = highScore;
        } else if (guess > secretNumber) {
            //When guess is too high
            document.querySelector('.message').textContent = '🔼 Too high!';
            updateScore();
        } else if (guess < secretNumber) {
            //When guess is too low
            document.querySelector('.message').textContent = '🔽 Too low!';
            updateScore();
        }
    } else {
        document.querySelector('.message').textContent = '💥 You lose!!!';
        updateScore();
    }
});

//When player press Again button
document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '',
    document.querySelector('.guess').focus();
    document.querySelector('.score').textContent = '20';
    score = 20;
})