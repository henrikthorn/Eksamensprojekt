    //Classes defined
class Employee {
constructor(employee_username, password, department, yy, email, level) {
    this.employee_user = employee_username;
    this.password = password;
    this.department = department;
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

    function buildTable(data) {
        let table = document.createElement("table");
        let fields = Object.keys(data[0]);
        let headRow = document.createElement("tr");
        fields.forEach(function(field) {
            let headCell = document.createElement("th");
            headCell.textContent = field;
            headRow.appendChild(headCell);
        });
        table.appendChild(headRow);
        data.forEach(function(object) {
            let row = document.createElement("tr");
            fields.forEach(function(field) {
                let cell = document.createElement("td");
                cell.textContent = object[field];
                if (typeof object[field] == "number") {
                    cell.style.textAlign = "right";
                }
                row.appendChild(cell);
            });
            table.appendChild(row);
        });
return table;
    }
    document.querySelector(Employees)
        .appendChild(buildTable(employeeList));

   //var employeeOutput = document.getElementsByClassName(Employee)
    //employeeOutput.innerHTML = Employee;




   // lav en HTML side med <div id="employees"> ligesom mountains

    // indsæt buildTable function i javascript

    // Kald document.querySelector for employees og funktionen buildTable(employeeList) i stedet for buildTable(MOUNTAINS)

    // Læs kapitel 14 i bogen om DOM

