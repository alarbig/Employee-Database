class Department {
    constructor (dept, name){

        this.dept = dept;
        this.name = name;
    }
    getDept(){
        return this.dept
    }
    getName(){
        return this.name
    }

}
module.exports = Department;