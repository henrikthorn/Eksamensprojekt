    //Classes defined
class Employee {
constructor(employee_username, password, department, yy, email, level) {
    this.employee_user = employee_username;
    this.password = password;
    this.department = department;
    this.yy = yy;
    this.email = email;
    this.skills = [];
    this.level = level;
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
   if(localStorage.getItem('Employee') == null) {
        var employeeList = [];
       employeeList.push (new Employee("Simon", 1234, "HR", 1999, "123@mail.dk", '1'));
       employeeList.push (new Employee("Mads", 12345,"IT", 1999,  "1234@email.com", '1'));
       employeeList.push (new Employee("Jessica", 54321, "Sales",1998, "Mail2@mail.dk",'1'));
       employeeList.push (new Employee("Benjamin", 4321,"IT", 1997, "blabla@mail.dk", '1'));

       var employeeListString = JSON.stringify(employeeList)
       localStorage.setItem('Employee', employeeListString)
   } else {
       var employeeList = JSON.parse(localStorage.getItem('Employee'))
   }



emp1.addNewSkill("IT", "Accounting");
emp2.addNewSkill("Sales", "Frontend");
emp3.addNewSkill("Backend", "Projekt Management");
emp4.addNewSkill("Accounting", "Sales");


console.log(employeeList.employee_user + " with skills " +  emp1.skills);
