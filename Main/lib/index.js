
const inquirer = require('inquirer')
const cTable = require('console.table');
const mysql = require('mysql2');
// module.exports = newSelection;

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'office_db'
    },
    console.log(`Connected to the office_db database.`)
  );

  db.connect(function (err){
    if (err) throw err;
    newSelection();
  })

const newSelection = () => {
     inquirer.prompt(
        [
            {
                type: 'list', 
                message: 'What would you like to do?', 
                name: 'homeSelection',
                choices: ['Add a new Dept', 'Add an employee', 'Add a new role', 'Update Employee role','View all depts', 'View all roles', 'View all employees']
            }, 
            
        ]
    ).then (function(choice){
        if (choice.homeSelection === 'Add a new Dept'){
            addDept()
        } if (choice.homeSelection === 'Add an employee'){
            addEmployee()
        } if (choice.homeSelection === 'Add a new Role'){
            addRole()
        } if (choice.homeSelection === 'Update Employee role') {
            updateEmployee()
        } if (choice.homeSelection === 'View all depts'){
            viewAllDept()
        } if (choice.homeSelection === 'View all roles'){
            displayRole()
        } if (choice.homeSelection === 'View all employees'){
            allEmployees()
        };
    })
}

const addDept = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is the name of this Dept?',
                name: 'name'        
                    }, 
                    {
                        type: 'list',
                        message: 'Would you like to add another Dept?',
                        name: 'addNewDept', 
                        choices: ['Yes', 'No']        
                            }
        ]
    ).then (function (choice){
        if (choice.addNewDept === 'Yes'){
            addDept()
        } else {
            newSelection()
        }
    })
};

const addRole = () => {
    return inquirer.prompt(
        [
            {
            type: 'input',
            message: 'What is the name of this role?',
            name: 'name'                        
            },
            {
                type: 'input',
                message: 'What is the salary for this role?',
                name: 'salary'        
                    },
                    {
                        type: 'input',
                        message: 'What Dept does this role belong to?',
                        name: 'dept'        
                            },
        ]
    )
};

const addEmployee = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is their first name?',
                name: 'firstName'        
                    },
                    {
                        type: 'input',
                        message: 'What is their last name?',
                        name: 'lastName'        
                            },
                            {
                                type: 'input',
                                message: 'What is the employees role?',
                                name: 'role'        
                                    },
                                    {
                                        type: 'input',
                                        message: 'Who is this employees manager?',
                                        name: 'manager'        
                                            },
        ]
    )
};

const updateEmployee = () => {
    return inquirer.prompt(
        [
            {
        type: 'input',
        message: 'Would you like to update an existing Employee Role?',
        name: 'employeeUpdate'        
            }
        ]
    )
};
