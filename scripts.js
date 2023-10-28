/****************** Exercise 1 ********************/

// Use a for loop to print numbers from 1 to 10
  
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

/****************** Exercise 2 ********************/

// Create a for loop that logs the numbers 4 to 156 to the console.

for (let i = 4; i <= 156; i++) {
    console.log(i);
  }


/****************** Exercise 3 ********************/

// Given the following array, log the sentence, "I really like the color: [COLOR]" for each of the items.
const favoriteColors = ["red", "blue", "purple", "yellow"];

for (let i = 0; i < favoriteColors.length; i++) {
    console.log(`I really like the color: ${favoriteColors[i]}`);
  }

/****************** Exercise 4 ********************/

// Use a for loop to calculate the sum of even numbers from 2 to 20

let sum = 0;
for (let i = 2; i <= 20; i += 2) {
  sum += i;
}
console.log(`The sum of even numbers from 2 to 20 is ${sum}`);



/****************** Exercise 5 ********************/

// Use a for loop to reverse a given string.
const inputString = "hello";
let reversedString = "";
// Output should be "olleh"

for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }
  console.log(`Reversed string is: ${reversedString}`);


/****************** Exercise 6 ********************/

// The factorial of a positive number is the product of all positive numbers less than or equal to it. So, in this case, the factorial of 5 is 5 * 4 * 3 * 2 * 1, which equals 120.

const num = 5; // The number for which we want to calculate the factorial
let factorial = 1;


// Calculate the factorial of a number using a for loop

for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  console.log(`The factorial of ${num} is ${factorial}`);



/****************** Exercise 7 ********************/


// Initial investment amount
const initialAmount = 1000;

// Annual interest rate (in decimal form)
const annualInterestRate = 0.05;

// Number of years
const years = 10;

console.log(`Initial Investment: $${initialAmount}`);
console.log(`Annual Interest Rate: ${annualInterestRate * 100}%`);
console.log(`Number of Years: ${years}`);

// Calculate the interest on an investment using a for loop

for (let i = 1; i <= years; i++) {
    amount *= (1 + annualInterestRate);
  }
  console.log(`Amount after ${years} years: $${amount.toFixed(2)}`);