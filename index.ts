#! /usr/bin/env node 

import inquirer from "inquirer";



let todos:string[] = [];
let condition = true

let color = console.log(
  '\x1b[31m      "Welcome To Our Todos-list Presented By Mudassar"\x1b[0m'
);
  
    while
    (condition)
    {
        let operationtodo = await inquirer.prompt({
            type: "list",
            message: "Select One Of The Operation",
            name: "listtodos",
            choices: ["Add Todo", "Update Todo", "Delete Todo", "View Todo", "Exit"],
          });
          if (operationtodo.listtodos === "Add Todo") {
            let inputtodo = await inquirer.prompt({
              type: "input",
              message: "Add Your item in todo",
              name: "Addtodos",
            });
            todos.push(inputtodo.Addtodos);
            console.log(todos)
          }
        
          if (operationtodo.listtodos === "Update Todo") {
            let updatetodo = await inquirer.prompt({
              type: "list",
              message: "Select one of the todo to Update",
              name: "update",
              choices: todos.map((item) => item),
            });
            let inputtodo = await inquirer.prompt({
              type: "input",
              message: "Update your Item to:",
              name: "Addtodos",
            });
            let newtodos = todos.filter(val => val !== updatetodo.update);
            todos = [...newtodos, inputtodo.Addtodos];
            console.log(todos)
          }
        
          if (operationtodo.listtodos === "Delete Todo") {
            let deletetodo = await inquirer.prompt({
              type: "list",
              message: "which item you want to delete?",
              name: "delete",
              choices: todos.map((item) => item),
            });
            let newtodos = todos.filter((val) => val !== deletetodo.delete);
            todos = [...newtodos]
            console.log(todos)
          }
        
          if (operationtodo.listtodos === "View Todo") {
            console.log(todos);
          }

          if(operationtodo.listtodos === "Exit"){
            let exit = await inquirer.prompt([{
              type: "confirm",
              message: "Are you sure you want exit",
              name: "exittodo",
              default: "true"
            }])
            condition = !exit.exittodo;
          }
        
    }




