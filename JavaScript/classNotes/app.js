console.log('hello')
//Typepf Operators
console.log(typeof 'hello')

//Math Operators
console.log(1 + 1)
console.log(314 % 100)

//Comparison
console.log(500 === 500)
console.log(500 === '500')
//double == is a loose comparison so use ===
console.log(500 == 500)
console.log(500 == '500')
//see if something is not true
console.log(500 !== 500)
console.log(500 !== 400)

//is larger than
console.log(400 > 500)
//is larger than or equal
console.log(400 >= 400)
//is smaller than 
console.log( 400 <= 300)

//Logical operators
console.log(true && true)
console.log(500 === 500 && 600 === '600')
console.log(true && false)

//Undefined
console.log(true && undefined)

//define variables
let isMyScoreHigher = 500 > 300
let isMoesScoreHigher = 500 > 700
console.log(isMoesScoreHigher && isMoesScoreHigher)

// Variables (use let if you want to change it, const if its going to be unchangable)
let myNumber = 200
myNumber = 300
myNumber++

const myName = 'Mallory'

//Logic Statements

let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

// Loops 
let number = 0
while (number <= 12) {
  console.log(number)
  number++
}

//For Loops -type for and click it (shorthand)
for (let index = 10; index < 12; index++) {
  console.log(index);
}

