'use strict';


/* const markMass = 78;
const markHeight = 1.99;
const johnMass = 92;
const johnHeight = 1.95;

const bmiMark = (markMass)/(markHeight ** 2);
console.log(bmiMark);

const bmiJohn = (johnMass)/(johnHeight ** 2);
console.log(bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(`Is Mark BMI higher than John? Answer: ${markHigherBMI}`);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI(${bmiMark.toPrecision(3)}) is higher than John'sBMI(${bmiJohn.toPrecision(3)}).`);
} else {
  console.log(`John's BMI(${bmiJohn.toPrecision(3)}) is higher than Mark'sBMI(${bmiMark.toPrecision(3)}).`);
} */

/* let dolphinsScore1, dolphinsScore2, dolphinsScore3;
let koalasScore1, koalasScore2, koalasScore3;

dolphinsScore1 = 96;
dolphinsScore2 = 108;
dolphinsScore3 = 89;

koalasScore1 = 88;
koalasScore2 = 91;
koalasScore3 = 110; */

/* dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;

koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 123; */

/* dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;

koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 106; */

/* const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3; */

//Applying bonus 1 and bonus 2 requirements.

/* let ds1, ds2, ds3, dsTotal, ks1, ks2, ks3, ksTotal;
ds1 = dolphinsScore1 >= 100 ? dolphinsScore1 : 0;
ds2 = dolphinsScore2 >= 100 ? dolphinsScore2 : 0;
ds3 = dolphinsScore3 >= 100 ? dolphinsScore3 : 0;
dsTotal = (ds1 > 0 ? 1 : 0) + (ds2 > 0 ? 1 : 0) + (ds3 > 0 ? 1 : 0);

ks1 = koalasScore1 >= 100 ? koalasScore1 : 0;
ks2 = koalasScore2 >= 100 ? koalasScore2 : 0;
ks3 = koalasScore3 >= 100 ? koalasScore3 : 0;
ksTotal = (ks1 > 0 ? 1 : 0) + (ks2 > 0 ? 1 : 0) + (ks3 > 0 ? 1 : 0);


const dolphinsAverageScore = (ds1 + ds2 + ds3) / dsTotal;
const koalasAverageScore = (ks1 + ks2 + ks3) / ksTotal;

console.log(`Dolphins: ${dolphinsAverageScore.toPrecision(4)} and Koalas: ${koalasAverageScore.toPrecision(4)}`);

if (dolphinsAverageScore > koalasAverageScore) {
  console.log('Dolphins are the winners!');
} else if (dolphinsAverageScore < koalasAverageScore) {
  console.log('Koalas are the winners!');
} else {
  console.log('Koalas and Dolphins have draw the match!');
} */

//Coding challenge #4

//tip calculator
//15% if bill value is between 50 and 300. If bill value is different, the tip is 20%.
//Test data: Test for bill values: 275 / 40 / 430

/* let tip, bill, total;

bill = 4153;

tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

total = (bill + tip);

console.log(`The bill was ${bill.toFixed(2)}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}.`); */


// //Challenge #1 - Functions

// //Arrow function
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// // console.log(calcAverage(1, 2, 3));

// /* function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// } */

// //DATA1
// const avgDolphins1 = calcAverage(44, 23, 71);
// const avgKoalas1 = calcAverage(65, 54, 49);
// console.log(avgDolphins1, avgKoalas1);

// //DATA2
// const avgDolphins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);
// console.log(avgDolphins2, avgKoalas2);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log('No winners at all');
//   }
// }

// const match1 = checkWinner(avgDolphins1, avgKoalas1);
// const match2 = checkWinner(avgDolphins2, avgKoalas2);

//tip calculator
//15% if bill value is between 50 and 300. If bill value is different, the tip is 20%.
//Test data: Test for bill values: 275 / 40 / 430

/* const tipCalculator = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 44];
console.log('bills', bills);
const tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
console.log('tips', tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log('total', total);
 */


// console.log(`The bill was ${bill.toFixed(2)}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}.`);

//Coding Challenge #3

/* const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI() {
    this.BMI = (this.mass) / (this.height ** 2);
    return this.BMI.toFixed(1);
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI() {
    this.BMI = (this.mass) / (this.height ** 2);
    return this.BMI.toFixed(1);
  }
}

const result = john.calcBMI() > mark.calcBMI() ? console.log(`${john.fullName}'s BMI(${john.BMI.toFixed(1)}) is higher than ${mark.fullName}'s BMI(${mark.BMI.toFixed(1)})!`) : console.log(`${mark.fullName}'s BMI(${mark.BMI.toFixed(1)}) is higher than ${john.fullName}'s BMI(${john.BMI.toFixed(1)})!`); */


/* //Coding Challenge #4 - Loops

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tipCalculator = (i) => (bills[i] >= 50 && bills[i] <= 300) ? bills[i] * 0.15 : bills[i] * 0.20;
  tips.push(tipCalculator(i));
  total.push(bills[i] + tips[i]);
}

console.log(bills, tips, total);

function calcAverage(arr) {
  let average = 0;
  // console.log('length', arr.length)

  for (let i = 0; i < arr.length; i++) {
    average += arr[i];
    // console.log(`index ${i}:`, arr[i], arr[i - 1], (arr[i] + arr[i - 1]));
  }
  // console.log(average);
  return average / arr.length;
}

console.log('bills:', calcAverage(bills));
console.log('tips:', calcAverage(tips));
console.log('total:', calcAverage(total));
console.log('testing:', calcAverage([1, 2, 3, 4, 5])); */

//Using live-server on Node JS.






