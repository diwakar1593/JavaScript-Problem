// Qr code generator

const prompt = require("prompt-sync")({ sigint: true });
const qr = require("qr-image");
const fs = require("fs");


let urlInput = prompt("Enter your URL  ");
console.log(`Your URL is: ${urlInput}`)


var qr_svg = qr.image(urlInput);
qr_svg.pipe(fs.createWriteStream("qr_img.png"));