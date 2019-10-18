class Project {
    constructor (ID, projectName, Members, Date) {
        this.ID = []
        this.projectName = Name
        this.Members = []
        this.Date = Date

    }
}

if(localStorage.getItem('Project') == null) {
    var ProjectList = [];

    ProjectList.push(new Project("Digi", "Digitalization", "", "15/10-2019"));
    ProjectList.push(new Project("Stor", "Storage Count", "", "15/10-2019"));
    ProjectList.push(new Project("Sale", "Sales System", "", "15/10-2019"));
    ProjectList.push(new Project("HRL", "HR Leadership", "", "15/10-2019"));

}

