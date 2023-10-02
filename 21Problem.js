function addMatrices(matrixOne, matrixTwo) {
  if (
    matrixOne.length !== matrixTwo.length ||
    matrixOne[0].length !== matrixTwo[0].length
  ) {
    return "Matrix dimensions are not compatible for addition.";
  }

  const result = [];

  for (let i = 0; i < matrixOne.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrixOne[i].length; j++) {
      result[i][j] = matrixOne[i][j] + matrixTwo[i][j];
    }
  }

  return result;
}

function subtractMatrices(matrixOne, matrixTwo) {
  if (
    matrixOne.length !== matrixTwo.length ||
    matrixOne[0].length !== matrixTwo[0].length
  ) {
    return "Matrix dimensions are not compatible for subtraction.";
  }

  const result = [];

  for (let i = 0; i < matrixOne.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrixOne[i].length; j++) {
      result[i][j] = matrixOne[i][j] - matrixTwo[i][j];
    }
  }

  return result;
}

function multiplyMatrices(matrixOne, matrixTwo) {
  if (matrixOne[0].length !== matrixTwo.length) {
    return "Matrix dimensions are not compatible for multiplication.";
  }

  const result = [];

  for (let i = 0; i < matrixOne.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrixTwo[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrixOne[0].length; k++) {
        sum += matrixOne[i][k] * matrixTwo[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}

// Example usage:
const matrixA = [
  [1, 2],
  [3, 4],
];

const matrixB = [
  [5, 6],
  [7, 8],
];

console.log("Matrix Addition:", addMatrices(matrixA, matrixB));
console.log("Matrix Subtraction:", subtractMatrices(matrixA, matrixB));
console.log("Matrix Multiplication:", multiplyMatrices(matrixA, matrixB));
