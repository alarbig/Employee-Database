const inquirer = require('inquirer')
const cTable = require('console.table');
const mysql = require('mysql2');


//When first loading the application it will first run the connection to the DB. You will need to change the password field to whatever your SQL root password is. 
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
//this is the main home page. You can select from various options. 
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
            addNewRole()
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
        ]
    ) .then (response => {
        db.query('INSERT INTO department SET ?', { 
            name: response.name
        }, (err, res) => {
            if (err) throw err;
            console.log(`${response.name} Department added!`);
            newSelection();
        })
    })
};
// these functions after taking the response will then submit them into the DB via the SQL commands given. 
const addNewRole = () => {
    return inquirer.prompt(
        [   
            {
            type: 'input',
            message: 'What is this roles ID # ?',
            name: 'idNumber'                        
            },
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
                        message: 'What is the Dept id?',
                        name: 'dept'        
                            },
        ]
    ).then (response => {
        db.query ('INSERT INTO role SET ?', {
            id: response.idNumber, title: response.name, salary: response.salary, department_id: response.dept
        }, (err, response) => {
            if (err) throw err;
            console.log(`New role, ${response.name}, added successfully!`);
            newSelection();
        })
    })
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
                                message: 'What is the employees role ID #?',
                                name: 'roleId'        
                                    },
                                    {
                                        type: 'input',
                                        message: 'What is their managers ID #?',
                                        name: 'manager'        
                                            },
        ]
    ).then (res =>{
        db.query('INSERT INTO employee SET ?',  {
            first_name: res.firstName, last_name: res.lastName, role_id: res.roleId, manager_id: res.manager
        }, (err, res) => {
            if (err) throw err;
            console.log (`New user has been added successfully!`);
            newSelection();
        })
    })
};

//this one first has to query the DB for the relevant data to then be updated. After connecting the DB and then grabbing the response, it will then update the DB with the new information
const updateEmployee = () => {
    db.query ('SELECT id, first_name, last_name FROM employee', 
    (err, res) => {
        if (err) throw err;
        {
                return inquirer.prompt(
                    [
                        {
                    type: 'input',
                    message: 'Please enter the employee ID you would like to update: ',
                    name: 'employeeUpdate'        
                        }, 
                        {
                            type: 'input', 
                            message: 'Please enter the new dept # you wish to assign to this person: ', 
                            name: 'newDept'
                        }
                    ]
                ).then (response => {
                    db.query (`UPDATE employee SET role_id = ${response.employeeUpdate} WHERE id = ${response.newDept}`, 
                    (err, res) => {
                        if (err) throw err;
                        console.log('User has been updated.');
                        newSelection();
                    })
                })
            };
    }
    )    
}

const viewAllDept = () => {
    db.query(`SELECT * FROM department`, (err, res) =>{
        if (err) throw err;
        console.table(res);
        newSelection();
    })
};

const displayRole =() => {
    db.query(`SELECT * FROM role`, (err, res) => {
        if (err) throw err;
        console.table(res);
        newSelection();
    })
}

const allEmployees = () => {
    db.query(`SELECT * FROM employee`, (err, res) => {
        if (err) throw err;
        console.table(res);
        newSelection();
    })
}