class Employee {
    constructor(newEmployee, firstName, lastName, role, manager){

    this.newEmployee = newEmployee;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.manager = manager;
    }
    getNewEmployee(){
        return this.newEmployee
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
    getRole(){
        return this.role
    }
    getManager(){
        return this.manager
    }
}

module.exports = Employee;