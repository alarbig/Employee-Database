DROP DATABASE IF EXISTS office_db;
CREATE DATABASE office_db;

USE office_db;
--These tables hold the data being input from the user. 
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (10,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR (30), 
    last_name VARCHAR (30), 
    role_id INT, 
    manager_id INT NULL,
    PRIMARY KEY (id)
);

