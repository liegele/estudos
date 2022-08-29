'use strict';

// const score1 = document.getElementById('score--1'); //A little faster than querySelector

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('btn-hold');

score0El.textContent = 0;
score1El.textContent = 0;

//Hiding the dice at the beggining of game
diceEl.classList.add('hidden');
