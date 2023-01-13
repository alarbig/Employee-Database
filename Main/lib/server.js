const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
const cTable = require('console.table');
// const newSelection = require('./index')
// const inquirer = require('inquirer')


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'office_db'
    },
    console.log(`Connected to the office_db database.`)
  );

  app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  // db.query('SELECT * FROM department', function (err, results){
  //   console.table([
  //     {
  //       Department: 'dept_name',
  //     },
  //       {Role: 'role_title', 
  //     }, 
  //     {Employee: 'first_name'
  //     }

  //   ])
  // },
  // newSelection()
  // )


  