function isPrime(number) {
    // Prime numbers must be greater than 1
    if (number <= 1) {
        return false;
    }

    // 2 and 3 are prime numbers
    if (number <= 3) {
        return true;
    }

    // If the number is divisible by 2 or 3, it's not prime
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    // Check for prime using 6k +/- 1 rule
    // All prime numbers (except 2 and 3) can be expressed as 6k ± 1.
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

// Example usage:
console.log(isPrime(5)); // Output will be true (5 is a prime number)
console.log(isPrime(12)); // Output will be false (12 is not a prime number)
console.log(isPrime(29)); // Output will be true (29 is a prime number)