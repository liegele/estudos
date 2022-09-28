'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivery to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// //SPREAD OPERATOR

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// //Join 2 or more arrays togheter
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //Iterables (Arrays, String, Maps, Sets. Not objects) working with Spread operator
// const str = 'liegele.dev';
// console.log(...str);

// // //Real world example
// // const ingredients = [
// //   prompt("Let's make some pasta! Ingrediente 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: 'Giuseppe Maximiliam',
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// //Rest pattern (Pack elements into array)
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// // const [a, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

// //Rest arguments
// const add = function (...numbers) {
//   console.log(numbers);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// //DESTRUCTURING OBJECTS

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //Destructuring Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via de Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via de Sole, 21',
//   starterIndex: 1,
// });

//////////////////////////////////////////////////////////////////////////////////////////////

/* //DESTRUCTURING ARRAYS
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

const arr2 = ['car', 'moto', 'tractor', 'airplane', 'helicopter'];
// const [d, e, f, g, h] = arr2;
// console.log(d, e, f, g, h);

// const [d, e, f] = arr2;
// console.log(d, e, f);

const [, , d] = arr2;
console.log(d);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching main for secondary and vice-versa.
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Another way to do the same as example above, but this time using Destructuring Arrays. Really nice, don't you think?!?
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receiving two returned values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

//Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Setting default values to desctructuring variables
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); */

/* //SHORT CIRCUITING

console.log('------ OR -----');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log('------ AND -----');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas' && true && false);

//THE MULLISH COALESCING OPERATOR (??) -- Work with nullish values
//Nullish: null and undefined (NOT 0 or '');
console.log('------ nullish coalescing operator -----');
let a = 0;
console.log(a || 'Jonas');
console.log(a ?? 'Jonas'); */

/* //LOGICAL ASSIGNMENT OPERATORS

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovani Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest2.owner = rest2.owner && '<ANONYMOUS>';

console.log(rest1);
console.log(rest2); */

//////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//TASK #1

const [players1, players2] = game.players;
console.log(players1, players2);

//TASK #2

const [gk1, ...fieldPlayers1] = players1;
console.log(gk1, fieldPlayers1);
const [gk2, ...fieldPlayers2] = players2;
console.log(gk2, fieldPlayers2);

//TASK #3

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//TASK #4

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//TASK #5

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//TASK #6

const printGoals = function (...playerNames) {
  const numberOfGoals = playerNames.length;
  console.log(numberOfGoals);
  for (const pn of playerNames) {
    console.log(pn);
  }
};

printGoals(
  'Davies',
  'Muller',
  'Lewandowski',
  'Kimmich',
  'Liégele',
  'Ronaldinho Gaúcho'
);
printGoals(...game.scored);

//TASK #7

team2 < team1 || console.log(`${game.team1} is more likely to win!`);
team1 < team2 || console.log(`${game.team2} is more likely to win!`);

///////////////////////////////////////
// Coding Challenge #2

/* 
  Let's continue with our football betting app!
  
  1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
  2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
  3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
  Odd of victory Bayern Munich: 1.33
  Odd of draw: 3.25
  Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
}

GOOD LUCK 😀
*/

//TASK #1

const gameScored = [...game.scored];
console.log(gameScored);

let goal = 1;
for (const player of gameScored) {
  console.log(`Goal ${goal}: ${player}`);
  goal++;
}

//TASK #2

let average;
let totalSum = 0;

for (const value of Object.values(game.odds)) {
  totalSum += value;
}

average = totalSum / 3;
console.log(`Odd average: ${average.toFixed(2)}`);

//TASK #3

// for (const [key, value] of Object.entries(game.odds)) {
//   console.log(`Odd for victory ${key}: ${value}`);
// }

console.log(`Odd for victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd for draw: ${game.odds.x}`);
console.log(`Odd for victory ${game.team2}: ${game.odds.team2}`);

//BONUS

const scores = {};

for (const player of game.scored) {
  scores[player] ? scores[player]++ : (scores[player] = 1);
  console.log(player, scores[player]);
}

console.log(scores);

// const myObj = {};
// for (let index = 0; index < 100; index++) {
//   myObj[`Index${index}`] = index;
// }

// console.log(myObj);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//TASK #1

const gameEventsArr = Array.from(gameEvents.values());
console.log(gameEventsArr);
const events = [...new Set(gameEventsArr)];
console.log(events);

//TASK #2

console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);

//TASK #3

let t1 = 0;
let t2 = 0;
let total = 0;
console.log(t1, t2);
const eventInterval = [];
for (const time of gameEvents.keys()) {
  t2 = time;
  console.log(t1, t2);
  total += t2 - t1;
  eventInterval.push(t2 - t1);
  t1 = t2;
}

console.log(
  `An event happened, on average, every ${(total / 11).toFixed(1)} minutes`
);
console.log(eventInterval);

//TASK #4

for (const [key, value] of gameEvents.entries()) {
  key <= 45
    ? console.log(`[FIRST HALF] ${key}: ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
}

console.log('---------------------------------------------');

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  // console.log(text);
  convertVariables(text);
});

function convertVariables(text) {
  const splitVariables = text.split('\n');
  console.log(splitVariables.length);
  for (let index = 0; index < splitVariables.length; index++) {
    splitVariables[index] = splitVariables[index].trim();
    if (splitVariables.length > 0) {
      let findUnderscoreIndex = splitVariables[index].indexOf('_');
      splitVariables[index] = splitVariables[index].toLowerCase();
      splitVariables[index] = splitVariables[index].replace(
        `_${splitVariables[index].charAt(findUnderscoreIndex + 1)}`,
        `${splitVariables[index].charAt(findUnderscoreIndex + 1).toUpperCase()}`
      );
    }
    console.log(splitVariables[index].padEnd(20, ' ') + '✅'.repeat(index + 1));
  }
}
