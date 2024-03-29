#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 1000;
let myPin = 123;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your PIN:",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct PIN code.");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option:",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Check Balance") {
        console.log("Your balance is: " + myBalance);
    }
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount to withdraw:",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient funds. You cannot withdraw more than your balance.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Withdrawal successful. Your updated balance is: " + myBalance);
        }
    }
}
else {
    console.log("Incorrect PIN code. Please try again.");
}
