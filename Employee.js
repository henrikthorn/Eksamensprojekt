//Classes defined
class Employee {
constructor(employee_username, password, department, yy, email) {
    this.employee_user = employee_username;
    this.password = password;
    this.department = department;
    this.yy = yy;
    this.email = email;
    this.skills = [];
}
// function: Pushses new skill, in "Skills" array
addNewSkill(skill){
  this.skills.push(skill);
}
}
// function: Deletes from "skills" array
deleteSkill(this.skills){
  this.skills.slice(

  )
}

//Employee Database
var emp1 = new Employee("Simon", 1234, "HR", 1999, "123@mail.dk");
var emp2 = new Employee("Mads", 12345,"IT", 1999,  "1234@email.com");
var emp3 = new Employee("Jessica", 54321, "Sales",1998, "Mail2@mail.dk");
var emp4 = new Employee("Benjamin", 4321,"IT", 1997, "blabla@mail.dk");

emp1.addNewSkill("IT", "Accounting");
emp2.addNewSkill("Sales", "Frontend");
emp3.addNewSkill("Backend", "Projekt Management");
emp4.addNewSkill("Accounting", "Sales");


console.log(emp1.employee_user + " with skills " +  emp1.skills);