#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to My Calculator");


const answer = await inquirer.prompt([
  {
    message: "Enter First Number:",
    type: "number",
    name: "firstNumber"
  },
  {
    message: "Enter Second Number:",
    type: "number",
    name: "secondNumber"
  },
  {
    message: "Select a Operator",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if(answer.operator === "Addition"){
  console.log("Your value is " + Number(answer.firstNumber + answer.secondNumber));
}
else if(answer.operator === "Subtraction"){
  console.log("Your value is " + Number(answer.firstNumber - answer.secondNumber));
}
else if(answer.operator === "Multiplication"){
  console.log("Your value is " + Number(answer.firstNumber * answer.secondNumber));
}
else if(answer.operator === "Division"){
  console.log("Your value is " + Number(answer.firstNumber / answer.secondNumber));
}
else {
  console.log("Please Select a valid operator"); 
}

console.log("Thank you for using it!!");

