class Employee {
constructor(employee_user, phone, department, yy, sex) {
    this.employee_user = employee_user;
    this.phone = phone;
    this.department = department;
    this.yy = yy;
    this.sex = sex;
    this.skills = [];
}

addNewSkill(skill){
  this.skills.push(skill);
}

}

var emp1 = new Employee("Simon", 12345678, "HR", 1999,"Male");
var emp2 = new Employee("Mads", 87654321,"IT", 1999, "Male");
var emp3 = new Employee("Jessica", 252522525, "Sales",1998, "Female");
var emp4 = new Employee("Benjamin", 60504497,"IT", 1997, "Male");

emp1.addNewSkill("IT", "Accounting");

console.log(emp1.employee_user + " with skills " +  emp1.skills);