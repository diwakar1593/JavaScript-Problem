// program to check if a number is prime or not
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
    if(number % 2 == 0) isPrime=false;
    for (let i = 3; i < Math.ceil(number/2); i+=2) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}
