// Question No. 10 
// Write a Program to inplement Binary Search Using Recursion
function recursiveBinarySearch(arr, x, start=0, end=arr.length-1) {
    if (start > end) return -1;  // Base case: the item was not found.

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) return mid;  // Found the item.

    if (arr[mid] > x) {
        return recursiveBinarySearch(arr, x, start, mid - 1);  // Search in the left half.
    } else {
        return recursiveBinarySearch(arr, x, mid + 1, end);  // Search in the right half.
    }
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const x = 5;

const index = recursiveBinarySearch(arr, x);
if (index !== -1) {
    console.log(`Element ${x} is present at index ${index}`);
} else {
    console.log(`Element ${x} is not present in the array`);
}
