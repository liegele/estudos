const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const bmiMark = (markMass)/(markHeight ** 2);
console.log(bmiMark);

const bmiJohn = (johnMass)/(johnHeight ** 2);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(`Is Mark BMI higher than John? ${markHigherBMI}`);
