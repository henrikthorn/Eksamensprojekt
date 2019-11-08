class Projectleader {
    constructor (userName, password, email, phone, level) {
        this.username = userName;
        this.password = passWord;
        this.email = email;
        this.phone = phone;
        this.level = level;
    }
    }

// Project leader Localstorage

if(localStorage.getItem('Projectleader') == null) {
    var Projectleaderlist = [];

    Projectleaderlist.push (new Projectleader("Oliver", "1234", "ms@cbs.dk", "11223344", '2'));
    Projectleaderlist.push (new Projectleader("Kristoffer", "4321", "ks@cbs.dk","22334455", '2'));

    var ProjectleaderlistString = JSON.stringify(Projectleaderlist)
        localStorage.setItem('Projectleader', ProjectleaderlistString)
    } else {
        var ProjectleaderlistString = JSON.parse(localStorage.getItem('Projectleader'))
    }


