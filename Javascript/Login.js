
this.usernameInput = document.getElementById("username");
this.passwordInput = document.getElementById("password");

// creating variables
let aLevel = JSON.parse(localStorage.getItem("authLevel"));

//Should we check for userLogin or or User in localstorage?
let existingUser = JSON.parse(localStorage.getItem("userLogin"));

let attempt = 3;

//TODO: I don't have any existingUser in my Localstorage, so I cant login.....
if(existingUser === null){
	var userLogins = [];
	userLogins.push(new User("Benjamin", 4321,"1" ));
	userLogins.push(new User("Mads",12345,"1"));
	userLogins.push(new User("Simon",1234,"1"));
	userLogins.push(new User("Jessica", 54321,"1"));
	// Logins for Projectmanagers
	userLogins.push(new User("Oliver",1234,"2"));
	userLogins.push(new User("Sara",4321,"2"));

	var userLoginstring = JSON.stringify(userLogins);
	localStorage.setItem("userLogin", userLoginstring);
	existingUser = userLogins;
}


let currentLogin = [];

// Login function that validate information with User class, and redirects after Authentication level
function checkLogin() {


    //TODO: We need to make sure existingUser has any items, otherwise this function will fail!
    for (let i = 0; i < existingUser.length; i++) {
	    console.log(existingUser[i].username);
	    console.log(usernameInput.value);
        if (usernameInput.value == existingUser[i].username && passwordInput.value == existingUser[i].password) {
            currentLogin.push({username: usernameInput})
            var IDString = JSON.stringify(currentLogin);
            localStorage.setItem("User", IDString);
            alert("Login successfully");
            console.log('virker');
	    //A level is not set..... The level should be part of the user....
            if (existingUser[i].authLevel == "2"){
                document.location = "employeeList.html";
                } else{
                document.location = "Medarbejderside.html";
            }
            return true;
        } else {
            console.log("Acces denied");

	    //TODO: Attempt was not defined... We can't have attempt in a loop... This means only the first three users in the loop will be able to login. 
            //attempt--;// Decrementing by one.
            //alert("You have wrong attempt;");
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




