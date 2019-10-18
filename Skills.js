// Defines "skillset" Class
class skills{
    constructor(ID, Skillset){
        this.ID = ID;
        this.Skillset = Skillset;
    }
}
if(localStorage.getItem("skills") == null) {
        var skillssetList = [];

        skillssetList.push(new skills())
}