

this.usernameInput = document.getElementById("username");
this.passwordInput = document.getElementById("password");



let existingEmployee = JSON.parse(localStorage.getItem('Employee'));

var currentLogin = [];

 var attempt = 4; // Variable to count number of attempts.
// Below function Executes on click of login button.

function checkLogin() {

    for (let i = 0; i < existingEmployee.length; i++) {
        if (usernameInput.value == existingEmployee[i].employee_user && passwordInput.value == existingEmployee[i].password) {
            currentLogin.push({employee_username: usernameInput})
            var IDString = JSON.stringify(currentLogin);
            localStorage.setItem('currentEmployee', IDString);
            alert("Login successfully");
            console.log('virker');
            document.location = "Medarbejderside.html";
            return true;
        } else {
            console.log('virker ikke');
            attempt--;// Decrementing by one.
            alert("You have wrong attempt;");
// Disabling fields after 3 attempts.
            if (attempt == 0) {
                document.getElementById("username").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
                return false;
            }
        }
    }
}
console.log(employeeList)
/*
if (typeof user !== 'undefined'){
        if(user.level === 1){
            // go to Level 1 page
        }else if(user.level ===2){
            // got to Level 2 page
        }
    }else{
        // display "invalid password"
    }
}else{
    // display "invalid username
}*/





