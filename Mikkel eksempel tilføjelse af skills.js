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

let emp1 = new Employee();

emp1.addNewSkill("IT");

console.log(emp1.skills);
VM75:21 ["IT"]
undefined
emp1.addNewSkill("Sales");
undefined
console.log(emp1.skills);
VM259:1 (2) ["IT", "Sales"]
undefined
let emp2 = new Employee("Mikkel", "20304050", "Finans", "1989", "Male");
undefined
emp2.addNewSkill("Accounting");
undefined
local-ntp.html:1 A cookie associated with a cross-site resource at https://accounts.google.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.
    return emp2.this_title;
VM621:1 Uncaught SyntaxError: Illegal return statement
return emp2.employee_user
VM673:1 Uncaught SyntaxError: Illegal return statement
console.log(emp2.employee_user);
VM752:1 Mikkel
undefined
console.log(emp2.employee_user + " is a " + emp2.yy + " year old consulting with skills in " + emp2.skills + " from department " + emp2.department);
VM1171:1 Mikkel is a 1989 year old consulting with skills in Accounting from department Finans
undefined