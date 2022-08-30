'use strict';

// const score1 = document.getElementById('score--1'); //A little faster than querySelector

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//Startin conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

function nextPlayer(active, inactive) {
  // console.log('active:', active, 'Inactive:', inactive);
  document.querySelector(`#current--${active}`).textContent = 0;
  currentScore = 0;
  /* document
    .querySelector(`.player--${active}`)
    .classList.remove('player--active');
  document
    .querySelector(`.player--${inactive}`)
    .classList.add(`player--active`); */

  //Work just like code above, but using toggle method, which add a class if not exist and remove it if exist.
  document
    .querySelector(`.player--${active}`)
    .classList.toggle('player--active');
  document
    .querySelector(`.player--${inactive}`)
    .classList.toggle('player--active');
  activePlayer = Number(inactive);
}

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    //Add dice to current score
    currentScore += Number(dice);
    // console.log(dice, currentScore);
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  } else {
    //Switch to next player
    activePlayer === 0 ? nextPlayer(0, 1) : nextPlayer(1, 0);
  }
});

//Implent Hold button logic
btnHold.addEventListener('click', function () {
  //1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  //2. Check if player's score is >= 100
  if (scores[activePlayer] >= 20) {
    //Finish te game
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    btnRoll.classList.toggle('hidden');
    btnHold.classList.toggle('hidden');
    diceEl.classList.toggle('hidden');
  }

  //3. Switch to the next player
  activePlayer === 0 ? nextPlayer(0, 1) : nextPlayer(1, 0);
});

btnNew.addEventListener('click', function () {
  //1. Redefine all values to start condition.
  activePlayer = 0;
  scores = [0, 0];
  currentScore = 0;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  btnRoll.classList.toggle('hidden');
  btnHold.classList.toggle('hidden');
});
