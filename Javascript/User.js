//Users
class User{
    constructor(username, password, authLevel){
        this.username = username;
        this.password = password;
        this.authlevel = authLevel;
    }
}
// Localstorage logins
if(localStorage.getItem("userLogin") == null){
    var userLogins = [];
    userLogins.push(new User("Benjamin", 4321,"1" ));
    userLogins.push(new User("Mads",12345,"1"));
    userLogins.push(new User("Simon",1234,"1"));
    userLogins.push(new User("Jessica", 54321,"1"));
    // Logins for Projectmanagers
    userLogins.push(new User("Oliver",1234,"2"));
    userLogins.push(new User("Sara",4321,"2"));

    var userLoginstring = JSON.stringify(userLogins)
    localStorage.setItem("userLogin", userLoginstring)
} else {
	var userLogin = JSON.parse(localStorage.getItem("User"))
}
