#! /usr/bin/env node

import inquirer from "inquirer";

// printing a wellcome Message

console.log("\n\t Wellcome to \'codehub moiz \' -CLI-simple-calculater\n");

// asking quations frome users through inquirer.

let aswner = await inquirer.prompt([

    {message:"Enter your first number",type:"number",name:"firstnumber"},
    {message:"Enter youer secound number",type:"number",name:"secoundnumber"},
    
    {

        message:"select youre one opretore frome opretions",
        type:"list",
        name:"opretore",
        choices:["Addition","Multipilcation","Subtraction","Division"],
    },
]);

if (aswner.opretore === "Addition"){
    console.log(aswner.firstnumber + aswner.secoundnumber)
}

else if (aswner.opretore === "Multipilcation"){
    console.log(aswner.firstnumber * aswner.secoundnumber)
}

 else if (aswner.opretore === "Subtraction"){
    console.log(aswner.firstnumber - aswner.secoundnumber)
}
else if (aswner.opretore === "Division"){
    console.log(aswner.firstnumber / aswner.secoundnumber)
}

else{
    console.log("invalied number")
}