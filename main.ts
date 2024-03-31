import inquirer from "inquirer";

interface ansType {
    userID: string,
    pin: number,
    accountType: string,
    Transaction: string,
    amount: number
}
const answer: ansType = await inquirer.prompt([{
    type: "input",
    name: "userID",
    message: "kindly enter your ID:"
},
{ type: "number",
    name: "pin",
    message: "kindly enter your PIN:"
},
{type: "list",
    name: "accountType",
    choices: ["current", "saving",],
    message: "kindly select your accountType:"
},
{ type: "list",
    name: "Transaction",
    choices: ["fast cash", "withdraw",],
    message: "kindly enter your amount:",
    when(answer) {
        return answer.accountType == "current"
    }
},
{ type: "list",
    name: "amount",
    choices: [1000, 2000, 3000],
    message: "kindly enter your amount:",
    when(answer) {
        return answer.Transaction == "fast cash"
    }
},

{ type: "number",
    name: "amount",
    message: "kindly Enter Your Amount:",
    when(answer) {
        return answer.Amount === "withdraw"
    }
}
])
if (answer.userID && answer.pin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log(balance);
    const EnterAmount = answer.amount;
    if (balance >= EnterAmount) {
        const remaining = balance - EnterAmount;
        console.log(`" Your remaining balance is", remaining`);

    } else {
        console.log(`"insufficient balance`);

    }

}
