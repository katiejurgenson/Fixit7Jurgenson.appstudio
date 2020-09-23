let userNum1 = Number(prompt("Enter a number:"));
let userNum2 = Number(prompt("Enter a second number:")); 

let summedNumbers = calculate(userNum1, userNum2);

function calculate (num1, num2) {
  return num1 + num2; 
}

console.log(`The sum of ${userNum1} and ${userNum2} is ${summedNumbers}.`);