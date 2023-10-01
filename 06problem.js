//Javascript program for Inserion Sort

function insertionSort(arr) {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Example usage
const arrayToSort = [12, 11, 13, 5, 6];
console.log('Original array:', arrayToSort);
const sortedArray = insertionSort(arrayToSort);
console.log('Sorted array:', sortedArray);
