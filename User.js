var existingEmployee = JSON.parse(localStorage.getItem('Employee'));
var submit = document.getElementById('submit');
var currentLogin = [];

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
submit.onclick = function(){

    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    for (let i = 0;i < existingEmployee.length; i++) {
        if ( usernameInput == existingEmployee[i].username && passwordInput == existingEmployee[i].password){
            currentLogin.push({employee_username: usernameInput})
            document.location.href ='succes.html';
            var IDString = JSON.stringify(currentLogin);
            localStorage.setItem('currentEmployee', IDString);
            alert ("Login successfully");
            return true;
         }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
    }
}




