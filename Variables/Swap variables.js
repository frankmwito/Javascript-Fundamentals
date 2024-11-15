// Write a program to swap the values of two variables.
 
let number1 = 34;
let number2 = 98;


// Swap using destructuring assignment
[number1, number2] = [number2, number1];

console.log(number1); // Output: 98
console.log(number2); // Output: 34
