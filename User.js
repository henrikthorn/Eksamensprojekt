

this.usernameInput = document.getElementById("username");
this.passwordInput = document.getElementById("password");



let existingEmployee = JSON.parse(localStorage.getItem('Employee'));
let existingProjectleader = JSON.parse(localStorage.getItem('Projectleader'));
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
        } else if (usernameInput.value == existingProjectleader[i].projectleader && passwordInput.value == existingProjectleader[i].password) {
            currentLogin.push({projectleader_username: usernameInput})
            var IDStrings = JSON.stringify(currentLogin);
            localStorage.setItem('currentProjectleader', IDStrings);
            alert("Login successfully");
            console.log('virker');
            document.location = "Projektlederside.html";
            return true;
        } else
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





