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

//Employee Database "Localstorage"
   if(localStorage.getItem('Employee') == null) {
        var employeeList = [];
       employeeList.push (new Employee1("Simon", 1234, "HR", 1999, "123@mail.dk", '1'));
       employeeList.push (new Employee2("Mads", 12345,"IT", 1999,  "1234@email.com", '1'));
       employeeList.push (new Employee3("Jessica", 54321, "Sales",1998, "Mail2@mail.dk",'1'));
       employeeList.push (new Employee4("Benjamin", 4321,"IT", 1997, "blabla@mail.dk", '1'));

       var employeeListString = JSON.stringify(employeeList)
       localStorage.setItem('Employee', employeeListString)
   } else {
       var employeeList = JSON.parse(localStorage.getItem('Employee'))
   }

   // forsøg på at sætte vores liste ind i en HTML tabel
   var employeeOutput = document.getElementsByClassName(Employee)
    employeeOutput.innerHTML = Employee;

   console.log(Employee1);


