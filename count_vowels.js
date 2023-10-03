function countVowels(inputString) {
    // Convert the input string to lowercase to make it case-insensitive
    inputString = inputString.toLowerCase();
    
    // Initialize a variable to store the vowel count
    let vowelCount = 0;
    
    // Define a string containing all the vowels
    const vowels = 'aeiou';
    
    // Loop through the characters in the input string
    for (let i = 0; i < inputString.length; i++) {
        // Check if the character is a vowel
        if (vowels.includes(inputString[i])) {
            vowelCount++;
        }
    }
    
    return vowelCount;
}

// Example usage:
const testString = "Hello, World!";
const numberOfVowels = countVowels(testString);
console.log(numberOfVowels); // Output will be 3 (e, o, o are vowels)