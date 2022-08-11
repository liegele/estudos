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

let dolphinsScore1, dolphinsScore2, dolphinsScore3;
let koalasScore1, koalasScore2, koalasScore3;

/* dolphinsScore1 = 96;
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

dolphinsScore1 = 97;
dolphinsScore2 = 112;
dolphinsScore3 = 101;

koalasScore1 = 109;
koalasScore2 = 95;
koalasScore3 = 106;

const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(`Dolphins: ${dolphinsAverageScore.toPrecision(3)} and Koalas: ${koalasAverageScore.toPrecision(3)}`);

if (dolphinsAverageScore > koalasAverageScore) {
  console.log('Dolphins are the winners!');
} else if (dolphinsAverageScore < koalasAverageScore) {
  console.log('Koalas are the winners!');
} else {
  console.log('Koalas and Dolphins have draw the match!');
}
