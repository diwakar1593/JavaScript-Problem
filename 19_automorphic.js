function isAutomorphicNumber(number) {
  const square = number * number;

  const numStr = number.toString();
  const squareStr = square.toString();

  return squareStr.endsWith(numStr);
}

const number = 25; //input

if (isAutomorphicNumber(number)) {
  console.log(`${number} is an Automorphic number.`);
} else {
  console.log(`${number} is not an Automorphic number.`);
}
