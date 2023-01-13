DROP DATABASE IF EXISTS office_db;
CREATE DATABASE office_db;

USE office_db;

CREATE TABLE department (
  dept_name VARCHAR(30),
  id INT,
);

CREATE TABLE role (
  id INT,
  role_title VARCHAR(30),
  role_salary DECIMAL,
  department_id INT,
);

CREATE TABLE employee (
    id INT, 
    first_name VARCHAR (30), 
    last_name VARCHAR (30), 
    role_id INT, 
    manager_id INT,
);

