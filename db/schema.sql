DROP DATABASE IF EXISTS office_db;
CREATE DATABASE office_db;

USE office_db;

CREATE TABLE department (
  dept_name VARCHAR(30),
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  role_title VARCHAR(30),
  role_salary DECIMAL,
  department_id INT,
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR (30), 
    last_name VARCHAR (30), 
    role_id INT, 
    manager_id INT,
);

