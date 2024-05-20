#! /usr/bin/env node

import inquirer from "inquirer";
const ans = await inquirer.prompt([{
    type: "number",
    name: "first_number",
    message: "Enter first_number: ",
},
{
    type: "number",
    name: "second_number",
    message: "Enter second_number: ",
},
{
    type: "list",
    name: "operator",
    message: "Please select operation type: ",
    choices: ["Addition","Subtraction","Multiplication","Division"]
} 
]);
if(ans.operator === "Addition"){
    console.log(ans.first_number + ans.second_number);
}
else if(ans.operator === "Subtraction"){
    console.log(ans.first_number - ans.second_number);
}
else if(ans.operator === "Multiplication"){
    console.log(ans.first_number * ans.second_number);
}
else{
    console.log(ans.first_number / ans.second_number);
}