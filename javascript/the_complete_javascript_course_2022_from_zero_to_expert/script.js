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


//Challenge #1 - Functions

//Arrow function
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// console.log(calcAverage(1, 2, 3));

/* function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
} */

//DATA1
let avgDolphins1 = calcAverage(44, 23, 71);
let avgKoalas1 = calcAverage(65, 54, 49);
console.log(avgDolphins1, avgKoalas1);

//DATA2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
console.log(avgDolphins2, avgKoalas2);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log('No winners at all');
  }
}

const match1 = checkWinner(avgDolphins1, avgKoalas1);
const match2 = checkWinner(avgDolphins2, avgKoalas2);