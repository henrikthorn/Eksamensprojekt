//Classes defined
class Employee {
constructor(employee_user, phone, department, yy, sex, email) {
    this.employee_user = employee_user;
    this.phone = phone;
    this.department = department;
    this.yy = yy;
    this.sex = sex;
    this.email = email;
    this.skills = [];
}
// function: Pushses new skill, in "Skills" array
addNewSkill(skill){
  this.skills.push(skill);
}

}
//Employee Database
var emp1 = new Employee("Simon", 12345678, "HR", 1999,"Male", "123@mail.dk");
var emp2 = new Employee("Mads", 87654321,"IT", 1999, "Male", "1234@email.com");
var emp3 = new Employee("Jessica", 252522525, "Sales",1998, "Female","Mail2@mail.dk");
var emp4 = new Employee("Benjamin", 60504497,"IT", 1997, "Male","blabla@mail.dk");

emp1.addNewSkill("IT", "Accounting");
emp2.addNewSkill("Sales", "Frontend");
emp3.addNewSkill("Backend", "Projekt Management");
emp4.addNewSkill("Accounting", "Sales");


console.log(emp1.employee_user + " with skills " +  emp1.skills);