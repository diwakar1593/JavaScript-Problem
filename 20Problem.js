function intToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += numerals[i];
      num -= values[i];
    }
  }

  return result;
}

const number = 3549;
const romanNumeral = intToRoman(number);
console.log(`${number} in Roman numerals is ${romanNumeral}`);

function romanToInt(roman) {
  const romanNumerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = romanNumerals[roman[i]];
    const next = romanNumerals[roman[i + 1]];

    if (next && current < next) {
      result += next - current;
      i++; // Skip the next character
    } else {
      result += current;
    }
  }

  return result;
}

const romanNumeral = "MMMCXLIX";
const number = romanToInt(romanNumeral);
console.log(`${romanNumeral} in decimal is ${number}`);

