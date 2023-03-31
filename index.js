const table = document.getElementById('table');
const tableHeaders = [{ name: 'NAME' }, { age: 'AGE' }, { email: 'EMAIL' }];

const tHead = table.createTHead();
const thRow = tHead.insertRow();
tableHeaders.forEach(element => {
    const td = thRow.insertCell();
    const value = Object.values(element)[0];
    td.appendChild(document.createTextNode(value));
});


const tBody = table.createTBody();

// function getEmployees() {
//     fetch('http://localhost:3000/employees')
//         .then(result => result.json())
//         .then(employees => createTableBody(employees));
// }
async function getEmployees() {
    let response;
    // fetch('http://localhost:3000/employees')
    //     .then(result => result.json())
    //     .then(employees => createTableBody(employees));
    // console.log(response);
    try {
        response = await fetch('http://localhost:3000/employees');
        const employees = await response.json();
        createTableBody(employees);
        console.log(employees);
    } catch (error) {
        console.error(error);
    }
    console.log(response);
}

function addEmployee() {
    fetch('http://localhost:3000/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Raj',
            age: 23,
            email: 'raj@gmail.com'
        })
    })
}
function addFromData() {
var username = document.getElementById('name').value;
// console.log(username);
var age = document.getElementById('age').value;
// console.log(age);
var  email = document.getElementById('email').value;
// console.log(email);
    fetch('http://localhost:3000/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name:username, 
            age: age,
            email:email
        })
    })
}

function createTableBody(employees) {
    employees.forEach(element => {
        const tr = tBody.insertRow();
        tableHeaders.forEach(header => {
            const key = Object.keys(header)[0];
            const td = tr.insertCell();
            td.appendChild(document.createTextNode(element[key]));
        })

    });
}