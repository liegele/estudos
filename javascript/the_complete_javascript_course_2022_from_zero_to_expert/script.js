const markMass = 78;
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
}
