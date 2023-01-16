USE office_db;

INSERT INTO department (name, id)
VALUES ('Sales', 3),
       ('Engineering', 4),
       ('Finance', 5),
       ('HR', 6),
       ('Legal', 7),
       ('Design', 8);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, 'Engineer', 75000, 2),
       (4, 'Sales', 80000, 3),
       (5, 'HR Associate', 55000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Leslie', 'Pineda', 10, 20),
       (2, 'Anders', 'Steven', 11, 21);