function reverseString(inputString) {
    // Initialize an empty string to store the reversed version
    let reversed = '';

    // Loop through the input string from the end to the beginning
    for (let i = inputString.length - 1; i >= 0; i--) {
        // Append each character to the 'reversed' string
        reversed += inputString[i];
    }

    return reversed;
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output will be "!dlroW ,olleH"