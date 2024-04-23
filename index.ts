#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    message: "Please guess a number between 1 - 6",
    type: "number",
    name: "userGuessedNumber",
  },
]);
if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulation! you guessed the right number");
} else {
  console.log("You guessed wrong number");
}
