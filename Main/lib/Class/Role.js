class Role {
    constructor(newRole, name, salary, dept, ){

    this.newRole = newRole;
    this.name = name;
    this.salary = salary;
    this.dept = dept;
    }
    getNewRole(){
        return this.newRole
    }
    getName(){
        return this.name
    }
    getSalary(){
        return this.salary
    }
    getDept(){
        return this.dept
    }
}

module.exports = Role;