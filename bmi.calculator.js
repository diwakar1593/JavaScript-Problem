// bmi calculator 

let weight  = 80 // kg
let height = 195 // cm
let bmi = 0

if (Number.isInteger(height)) {
     height = height/ 100
     bmi = (weight/height**2).toFixed(2)
} 
else {
     bmi = (weight/height**2).toFixed(2)
}


console.log(`Your bmi (BODY MASS INDEX) is: ${bmi}`)


if (bmi < 18.5){
    console.log("You are underweight")
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Your weight is normal!")
}
else if (bmi >= 25.0 && bmi <= 29.9) {
    console.log("You are overweight.")
}
else if (bmi >= 30.0 && bmi <= 34,9) {
    console.log("Grade 1 obesity")
}
else if (bmi >= 35,0 && bmi <= 39,9) {
    console.log("Grade 2 obesity (severe)")
}
else if (bmi > 40) {
    console.log("Grade 3 obesity (morbid)")
}



