// 1 //

let str = 'Hello Hello1 Hello2 Hello3'
let arr_str = str.split(' ')

console.log(arr_str)
console.log(' ')

// 2 //

let str_to_f = 'Hello World!'
let str_to_s = 'World'

let res_bit = str_to_f.includes(str_to_s)

console.log(res_bit)
console.log(' ')

// 3 //

let num = 10

function findFactorial(num) {
    let result = 1;
    for (let i = num; i > 1; i--) {
        result *= i
    }
    return result
}

console.log(findFactorial(num))
console.log(' ')

// 6 //

let arr_to_sort = [6, 23, 3, 12, 87, 32, 11, 13, 7, 43, 10]

function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

let arr_sorted = bubbleSort(arr_to_sort)
console.log(arr_sorted)
console.log(' ')

// 4 //

let arr_to_search = arr_sorted;

function binarySearch(A,t)
{
    var i = 0, j = A.length, k; 
                                 
    while (i < j)                
    {  k = Math.floor((i+j)/2);
       if (t <= A[k]) j = k;
       else i = k+1;
    }
   
    if (A[ i ] === t) return i;
    else return -1;
}

console.log(binarySearch(arr_to_search, 6))
console.log(' ')

// 5 //
let dates = [
    new Date('October 2, 2019 12:00:00 GMT+0000'),
    new Date('October 2, 2018 12:00:00 GMT+0000'),
    new Date('October 2, 2017 12:00:00 GMT+0000'),
    new Date('October 2, 2016 12:00:00 GMT+0000'),
    new Date('October 3, 2016 12:00:00 GMT+0000'),
    new Date('October 4, 2016 12:00:00 GMT+0000'),
    new Date('October 1, 2016 12:00:00 GMT+0000'),
]

function findMaxDate(arrD) {
    let maxValue = arrD[0]
    for (let i = 1; i <= arrD.length; i++) {
        if(arrD[i] > maxValue){
            maxValue = arrD[i]
        }
        else {
            continue
        }   
    }

    return maxValue
}

console.log(findMaxDate(dates))
console.log(' ')

// 7 //

class Client {
    constructor(name, lastName, age, gender, id){
        this.name = name
        this.lastName = lastName
        this.age = age
        this.gender = gender
        this.id = id
    }
}

class Project {
    constructor(name, deadline, id, clientId, employeeId){
        this.id = id
        this.name = name
        this.deadline = deadline
        this.client = clientId
        this.employee = employeeId
    }
}

class Employee {
    constructor(name, lastname, age, experience, gender, id){
        this.name = name
        this.lastName = lastname
        this.age = age
        this.experience = experience
        this.gender = gender
        this.id = id
    }
}

class ProjectOnGoing {
    constructor(employeeId, clientId, projectId) {
        this.employee = employeeId
        this.client = clientId
        this.project = projectId
    }
}

let ProjectsOnGoing = new Array(0);
let Employees = new Array(0);
let Projects = new Array(0);
let Clients = new Array(0);

////////////////////////////////////////\ F I N D \///////////////////////////////////////////

function findClient(id){
	return Clients.find(client => client.id === id);
}

function findProject(id){
	return Projects.find(project => project.id === id);
}

function findEmployee(id){
	return Employees.find(employee => employee.id === id);
}

function findProjectsOnGoing(projectId){
	return ProjectsOnGoing.find(projectOn => projectOn.project === projectId);
}

///////////////////////////////////////\ A D D \//////////////////////////////////////

function addClient(name, lastName, age, gender, id){
	if(findClient(id)==undefined){
		Clients.push(new Client(name, lastName, age, gender, id));
		return;
	}
	console.log('Client [ID: ' + id + '] already exists');
}

function addEmployee(name, lastName, age, experience, gender, id){
	if(findEmployee(id)==undefined){
		Employees.push(new Employee(name, lastName, age, experience, gender, id));
		return;
	}
	console.log('Employee [ID: ' + id + '] already exists');
}

function addProject(name, deadline, id, clientId, employeeId){
	if(findProject(id)==undefined){
		Projects.push(new Project(name, deadline, id, clientId, employeeId));
		return;
	}
	console.log('Project [ID: ' + id + '] already exists');
}

function addProjectOnGoing(employee, client, project){
	if(findProjectsOnGoing(project)==undefined){
		ProjectsOnGoing.push(new ProjectOnGoing(employee, client, project));
		return;
	}
	console.log('Project [ID: ' + project + '] already exists');
}

//////////////////////////////////////\ D E L E T E \///////////////////////////////////

function deleteClient(clientId){
	if(ProjectsOnGoing.filter(project => project.client === clientId).length === 0){
		Clients = Clients.filter(client => client.id != clientId);
		return;
	}
	console.log("We can't delete Client [ID: " + clientId + "] have projects on going");
}

function deleteEmployee(employeeId){
	if(ProjectsOnGoing.filter(project => project.employee === employeeId).length === 0){
		Employees = Employees.filter(employee => employee.id != employeeId);
		return;
	}
	console.log("We can't delete Employee [ID: " + employeeId + "] have projects on going");
}

function deleteProject(projectId){
    Projects = Projects.filter(project => project.id != projectId);
    ProjectsOnGoing = ProjectsOnGoing.filter(project => project.project != projectId);
}

function deleteProjectOnGoing(projectId){
    ProjectsOnGoing = ProjectsOnGoing.filter(p => p.project != projectId);
}

/////////////////////////////////////\ E D I T \////////////////////////////////////////

function editClient(clientId, parameters){
	let client = Clients.find(client => client.id === clientId);
	if ("name" in parameters) {
        client.name = parameters.name
    }
    if ("lastName" in parameters) {
        client.lastName = parameters.lastName
    }
    if ("age" in parameters) {
        client.age = parameters.age
    }
    if ("gender" in parameters) {
        client.gender = parameters.gender
    }
}

function editEmployee(employeeId, parameters){
	let employee = Employees.find(employee => employee.id === employeeId);
	if ("name" in parameters) {
        employee.name = parameters.name
    }
    if ("lastName" in parameters) {
        employee.lastName = parameters.lastName
    }
    if ("age" in parameters) {
        employee.age = parameters.age
    }
    if ("gender" in parameters) {
        employee.gender = parameters.gender
    }
    if ("experience" in parameters) {
        employee.experience = parameters.experience
    }

}

function editProject(projectId, parameters){
	let project = Projects.find(project => project.id === projectId);
	if ("name" in parameters) {
        project.name = parameters.name
    }
    if ("deadline" in parameters) {
        project.deadline = parameters.deadline
    }
    if ("client" in parameters) {
        project.client = parameters.client
    }
    if ("employee" in parameters) {
        project.employee = parameters.employee
    }

}

function editProjectOnGoing(projectId, parameters){
	let project = ProjectsOnGoing.find(project => project.project === projectId);
	if ("project" in parameters) {
        project.project = parameters.project
    }
    if ("client" in parameters) {
        project.client = parameters.client
    }
    if ("employee" in parameters) {
        project.employee = parameters.employee
    }

}

/////////////////////////////////////////////////////////////////////////////////////////////

addClient('John', 'Snow', 28, 'male', 34792374)
addClient('Leonardo', 'Dicaprio', 48, 'male', 683948)
addClient('Andy', 'Dufresne', 34, 'male', 5830580)

addEmployee('Tyler', 'Durden', 32, 5, 'male', 5739858)
addEmployee('Edward', 'Norton', 35, 5, 'male', 4395039),
addEmployee('Elliot', 'Alderson', 26, 10, 'male', 8583958)

addProject('Project', new Date('October 2, 2022 12:00:00 GMT+0000'), 163578, 5830580, 8583958)
addProject('PrOjEcT', new Date('November 12, 2022 12:00:00 GMT+0000'), 457857, 683948, 4395039)

addProjectOnGoing(48593493, 43939495, 3993959)
addProjectOnGoing(3456777, 346896678, 18548794)


console.log(findClient(34792374))
deleteClient(5830580)
editClient(34792374, {lastName: 'Rain'})
console.log(Clients)


console.log(findEmployee(8583958))
deleteEmployee(4395039)
editEmployee(8583958, {experience: 9})
console.log(Employees)


console.log(findProject(163578))
deleteProject(163578)
editProject(457857, {name: 'PROJECT'})
console.log(Projects)


console.log(findProjectsOnGoing(3993959))
deleteProjectOnGoing(3993959)
editProjectOnGoing(18548794, {client: '000000000'})
console.log(ProjectsOnGoing)
