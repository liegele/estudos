'use strict';

// //Understanding how THIS keyword works...

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); //undefined just because the 'strict mode'.
// };

// calcAge(1976);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); //Arrow function doesn't have your own this keyword. This way it takes from parent scope (Window Object) in this case.
// };

// calcAgeArrow(1976);

// const jonas = {
//   year: 1991,
//   calcAge() {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

//Primitives vs Objects in Practice

let lastName = 'Williams';
let odLastName = lastName;
lastName = 'Davis';
console.log(lastName, odLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';

console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// marriedJessica = {};
