function countVowels(str) {
  // Convert the string to lowercase to make the function case-insensitive
  str = str.toLowerCase();

  // Initialize a variable to keep track of the vowel count
  let vowelCount = 0;

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    // Check if the character is a vowel (a, e, i, o, u)
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowelCount++;
    }
  }

  // Return the total vowel count
  return vowelCount;
}

// Example usage:
const inputString = "Vowel";
const result = countVowels(inputString);
console.log(`The number of vowels in "${inputString}" is ${result}`);
