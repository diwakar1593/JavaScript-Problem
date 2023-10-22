function isArmstrongNumber(number) {
  const numStr = number.toString();
  const numDigits = numStr.length;

  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numStr[i], 10);
    sum += Math.pow(digit, numDigits);
  }

  return sum === number;
}

const number = 153; //input

if (isArmstrongNumber(number)) {
  console.log(`${number} is an Armstrong number.`);
} else {
  console.log(`${number} is not an Armstrong number.`);
}
