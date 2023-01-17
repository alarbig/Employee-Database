USE office_db;
--This will insert some data into the DB when run so there will be some data to start with. 
INSERT INTO department (name, id)
VALUES ('Sales', 1),
       ('Engineering', 2),
       ('HR', 3),
       ('Finance', 4),
       ('Legal', 5),
       ('Design', 6);

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Sales', 80000, 1),
       (2, 'Engineer', 75000, 2),
       (3, 'HR Associate', 55000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Leslie', 'Pineda', 6, 20),
       (2, 'Anders', 'Steven', 2, 21);