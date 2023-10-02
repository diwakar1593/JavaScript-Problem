/**
 * Caesar Cipher Encoder
 * 
 * Takes a string of plaintext and a shift as inputs and displays the corresponding encoded text.
 */

const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const encode = (plaintext, shift) => plaintext.split("").map(f => alpha.includes(f.toUpperCase()) ?
    alpha[(alpha.indexOf(f.toUpperCase()) + shift) % 26] : f).join("");

console.log(encode("Hello World!", 4));