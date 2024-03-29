'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}
    </div>
      <div class="movements__date">${null}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

const createUsernames = function (accs) {
  //TODO
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
// console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// //At method

// const arr = [23, 11, 64];

// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(...arr.slice(-1));
// console.log(arr.at(-1));

// console.log('liegele'.at(-1));

// //Looping Arrays: ForEach

// // for (const movement of movements) {
// for (const [index, movement] of movements.entries()) {
//   movement > 0
//     ? console.log(`Moviment ${index + 1}: You deposited ${movement}`)
//     : console.log(`Moviment ${index + 1}: You withdrew ${Math.abs(movement)}`);
// }

// console.log('--- FOREACH ---');

// // movements.forEach((movement, index, array) => {
// movements.forEach((movement, index) => {
//   // console.log(array);
//   movement > 0
//     ? console.log(`Moviment ${index + 1}: You deposited ${movement}`)
//     : console.log(`Moviment ${index + 1}: You withdrew ${Math.abs(movement)}`);
// });

// //ForEach with Maps and Sets.

// console.log('--- FOREACH MAPS/SETS ---');

// const curr = new Map([
//   ['USD', 'United states dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound Sterling'],
// ]);

// curr.forEach((value, key, map) => {
//   /* console.log(key);
//   console.log(value);
//   console.log(map); */
//   console.log(`${key}: ${value}`);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age,
 and stored the data into an array (one array for each).
  For now, they are just interested in knowing whether a dog is an adult or a puppy.
   A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'),
 and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs!
 So create a shallow copy of Julia's array,
  and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an
 adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* const julia1 = [3, 5, 2, 12, 7];
const julia2 = [9, 16, 6, 8, 3];
const kate1 = [4, 1, 15, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJ = dogsJulia.slice().splice(1, 2);
  const allDogs = [...dogsJ, ...dogsKate];
  console.log(allDogs);
  allDogs.forEach((age, i) => {
    const dogStatus =
      age >= 3
        ? console.log(
            `Dog number ${i + 1} is an adult, and is ${age} years old.`
          )
        : console.log(`Dog number ${i + 1} is a puppy 🐶`);
  });
};

console.log('--- TEST 1 ---');
checkDogs(julia1, kate1);
console.log('--- TEST 2 ---');
checkDogs(julia2, kate2); */

/* //MAP method.

const euroToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUsd = movements.map(mov => mov * euroToUsd);
console.log(movements);
console.log(movementsUsd); */

/* // FILTER METHOD

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('--- FILTER METHOD ---');
const deposits = movements.filter(mov => mov > 0);
console.log(deposits); */

/* //REDUCE METHOD

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Accumlator is like a snow ball
const balance = movements.reduce((acc, cur, i) => {
  // console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance); */

/* //Defining a maximum value with REDUCE METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const max = movements.reduce(
  (acc, cur) => (acc < cur ? (acc = cur) : (acc = acc)),
  movements[0]
);
console.log(max); */
