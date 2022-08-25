'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number';
// console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 17; */

let score = 20;

function updateScore(){
    score --;
    document.querySelector('.score').textContent = score;
}

const secretNumber = Math.trunc((Math.random() * 20) + 1);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if (score > 1) {
        if (guess < 1) {
            document.querySelector('.message').textContent = '❌ Less than 1.';
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Correct Number!';
        } else if (guess > secretNumber) {
            document.querySelector('.message').textContent = '🔼 Too high!';
            updateScore();
        } else if (guess < secretNumber) {
            document.querySelector('.message').textContent = '🔽 Too low!';
            updateScore();
        }
    } else {
        document.querySelector('.message').textContent = '💥 You lose!!!';
        updateScore();
    }


});