
this.usernameInput = document.getElementById("username");
this.passwordInput = document.getElementById("password");

// creating variables
let aLevel = JSON.parse(localStorage.getItem("authLevel"));
let existingUser = JSON.parse(localStorage.getItem("User"));

let currentLogin = [];

// Login function that validate information with User class, and redirects after Authentication level
function checkLogin() {

    for (let i = 0; i < existingUser.length; i++) {
        if (usernameInput.value == existingUser[i].username && passwordInput.value == existingUser[i].password) {
            currentLogin.push({username: usernameInput})
            var IDString = JSON.stringify(currentLogin);
            localStorage.setItem("User", IDString);
            alert("Login successfully");
            console.log('virker');
            if (aLevel[i].level == 2){
                document.location = "employeeList.html";
                } else{
                document.location = "Medarbejderside.html";
            }
            return true;
        } else {
            console.log("Acces denied");
            attempt--;// Decrementing by one.
            alert("You have wrong attempt;");
// Disabling fields after 3 attempts.
            if (attempt === 0) {
                document.getElementById("username").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
                return false;
            }
        }
    }
}




