//Javascript program to find the maximum element in an array of numbers.

function findMaxElement(arr) {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }

  let max = arr[0]; // Initialize max with the first element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if a greater element is found
    }
  }

  return max;
}

// Example usage
const numbers = [10, 5, 15, 8, 20];
const maxNumber = findMaxElement(numbers);
console.log('The maximum element is:', maxNumber); // Output: 20
