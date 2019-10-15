class Projectleader {
    constructor (employee_user, email, phone, project, Level) {
        this.employee_user = employee_user;
        this.email = email;
        this.phone = phone;
        this.project = project;
        this.level = level;
    }
    }

//Database over projektleder

if(localStorage.getItem('Projectleader') == null) {
    var Projectleaderlist = [];

    Projectleaderlist.push (new Projectleader("Oliver", "ms@cbs.dk", 12345678, "Digitalization", '2'));
    Projectleaderlist.push (new Projectleader("Sara", "sm@cbs.dk",987654321, "Storage Count", '2'));
    Projectleaderlist.push (new Projectleader("Kristoffer", "ks@cbs.dk", 124535687,"Sales System", '2'));
    Projectleaderlist.push (new Projectleader("Nicklas", "ns@cbs.dk",78654321, "HR Leadership", '2'));

    var ProjectleaderlistString = JSON.stringify(Projectleaderlist)
        localStorage.setItem('Projectleader', ProjectleaderlistString)

    } else {
        var ProjectleaderlistString = JSON.parse(localStorage.getItem('Projectleader'))
    }


console.log (Projectleaderlist.employee_user + " is project manager of: " + prl1.project + " contact info is: " + prl1.email + prl1.phone);

