//Classes defined
/*BHVN: Koden skal åbne en klasse (objekt) orienteret tilgang, nedestående definere vores klasse "Employee", som vi bygger ved hjælp af en
constructer som er det vores klasse bygger på
 */
class Employee {
    constructor(name, gender, department, yy, email,) {
        this.name = name;
        this.gender = gender;
        this.department = department;
        this.email = email;
        this.skills = [];

    }

    // function: Pushses new skill, in "Skills" array
    addNewSkill(skill){
        this.skills.push(skill);
    }
}

//Employee Database "Localstorage"
if(localStorage.getItem('Employee') == null) {
    var employeeList = [];
    employeeList.push (new Employee("Simon", "Male", "HR", 1999, "123@mail.dk"));
    employeeList.push (new Employee("Mads", "Male","IT", 1999,  "1234@email.com"));
    employeeList.push (new Employee("Jessica", "Female", "Sales",1998, "Mail2@mail.dk"));
    employeeList.push (new Employee("Benjamin", "Male","IT", 1997, "blabla@mail.dk"));

    var employeeListString = JSON.stringify(employeeList);
    localStorage.setItem('Employee', employeeListString);
    document.querySelector('#employees').appendChild(buildTable(employeeList));
} else {
    var employeeList = JSON.parse(localStorage.getItem('Employee'));
}
//Function creates table for employeeLise
function buildTable(data) {
    let table = document.createElement("table");

    // Create table head and body
    table.appendChild(document.createElement('thead'));
    table.appendChild(document.createElement('tbody'));

    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    fields.forEach(function(field) {
        let headCell = document.createElement("th");
        headCell.textContent = field;
        headRow.appendChild(headCell);
    });
    table.querySelector('thead').appendChild(headRow);
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
        table.querySelector('tbody').appendChild(row);
    });
    return table;
}
document.querySelector('#employees').appendChild(buildTable(employeeList));
