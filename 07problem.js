/* 

Problem 5: FizzBuzz

Write a function that prints numbers from 1 to n, but for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz." For numbers which are multiples of both 3 and 5, print "FizzBuzz."

*/

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
  
  fizzBuzz(15);
  
// remove duplicates from an array

let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];
  
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));
