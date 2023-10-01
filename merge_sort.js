function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
  
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // Example usage:
  const unsortedArray = [5, 2, 9, 3, 6];
  const sortedArray = mergeSort(unsortedArray);
  console.log(sortedArray);
  