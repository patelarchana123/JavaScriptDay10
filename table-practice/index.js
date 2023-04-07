// create table
let table = document.getElementById('table');
// create tablehead
let tableHead = table.createTHead();

//create tr
let tr = tableHead.insertRow(); 

let tableHeaders = [{name:'Name'},{age:'age'}];
let Person = [{name:"archana",age:21}];
tableHeaders.forEach(element =>{
    let td = tr.insertCell();
    td.appendChild(document.createTextNode(Object.values(element)));
});

let tablebody = table.createTBody();


Person.forEach(element =>{
    let tablebodyRow = tablebody.insertRow();
    for (const iterator of tableHeaders) {
        let tablebodydata = tablebodyRow.insertCell();
        key = Object.keys(iterator)[0];
        tablebodydata.appendChild(document.createTextNode(element[key]));
    }
});
table.setAttribute('border','2');