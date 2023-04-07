const table = document.getElementById("table");
const tableHeaders = [
  { firstname: "FIRSTNAME" },
  { lastname: "LASTNAME" },
  { phonenumber: "PHONENUMBER" },
  { email: "EMAIL" },
  { password: "PASSWORD" },
  { Action: "ACTION" },
];

const tHead = table.createTHead();
const thRow = tHead.insertRow();
tableHeaders.forEach((element) => {
  const td = thRow.insertCell();
  const value = Object.values(element)[0];
  td.appendChild(document.createTextNode(value));
});

//create tble body
const tBody = table.createTBody();

// GET display data
async function getData() {
  let response;
  try {
    response = await fetch("http://localhost:3000/users");
    const users = await response.json();
    createTableBody(users);
    // console.log(users);
  } catch (error) {
    console.error(error);
  }
  // console.log(response);
}

// function addData() {
//     fetch('http://localhost:3000/users',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: 'Raj',
//             age: 23,
//             email: 'raj@gmail.com'
//         })
//     })
// }

//Post add data
function addFromData() {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let phonenumber = document.getElementById("phonenumber").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      phonenumber: phonenumber,
      email: email,
      password: password
    }),
  });
}
// PUT  update data
function editUser(element) {
  let id = element.id;
  let firstname = document.getElementById("firstname").value = element.firstname;
  let lastname = document.getElementById("lastname").value = element.lastname;
  let phonenumber = document.getElementById("phonenumber").value = element.phonenumber;
  let email = document.getElementById("email").value = element.email;
  let password = document.getElementById("password").value = element.password;

  var updateButton = document.getElementById('data');
  updateButton.onclick = function updateData() {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        phonenumber: document.getElementById("phonenumber").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,

      }),
    });
  }
}
// Delete delete data
function deleteUser(id) {
  fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
  });
}

// validate firstname
function validateFirstnameInput() {
  const firstnameRegex = /^[A-Za-z]+$/;
  const firstnameInput = document.getElementById('firstname').value;
  const AddUserBtn = document.getElementById("addbutton");
  const firstnameError = document.getElementById('firstname-error');

  if (!firstnameRegex.test(firstnameInput)) {
    AddUserBtn.disabled = true;
    firstnameError.style.display = 'block';
  } else {
    AddUserBtn.disabled = false;
    firstnameError.style.display = 'none';
  }
}
// validate lastname
function validateLastnameInput() {
  const lastnameRegex = /^[A-Za-z]+$/;
  const lastnameInput = document.getElementById('lastname').value;
  const lastnameError = document.getElementById('lastname-error');
  const AddUserBtn = document.getElementById("addbutton");

  if (!lastnameRegex.test(lastnameInput)) {
    AddUserBtn.disabled = true;
    lastnameError.style.display = 'block';
  } else {
    AddUserBtn.disabled = false;
    lastnameError.style.display = 'none';
  }
}
// validate phonenumber
function validatePhonenumberInput() {
  const PhonenumberRegex = /^[8 9][0-9]{9}$/;
  const PhonenumberInput = document.getElementById('phonenumber').value;
  const PhonenumberError = document.getElementById('phonenumber-error');
  const AddUserBtn = document.getElementById("addbutton");

  if (!PhonenumberRegex.test(PhonenumberInput)) {
    AddUserBtn.disabled = true;
    PhonenumberError.style.display = 'block';
  } else {
    AddUserBtn.disabled = false;
    PhonenumberError.style.display = 'none';
  }
}
// validate Email
function validateEmailInput() {
  const EmailRegex = /^[a-zA-Z0-9._%+-]+@1rivet.com$/;
  const EmailInput = document.getElementById('email').value;
const EmailError = document.getElementById('Email-error');
  const AddUserBtn = document.getElementById("addbutton");

  if (!EmailRegex.test(EmailInput)) {
    AddUserBtn.disabled = true;
    EmailError.style.display = 'block';
  } else {
    AddUserBtn.disabled = false;
    EmailError.style.display = 'none';
  }
}
// // password regex 
// const passwordInput = document.getElementById('password');
// const passwordError = document.getElementById('password-error');

// EmailInput.addEventListener('input', () => {
//   const PasswordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
//   if (!PasswordRegex.test(passwordInput.value)) {
//     passwordError.style.display = 'block';
//   } else {
//     passwordError.style.display = 'none';
//   }
// })
function validatePasswordInput() {
  const PasswordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
const passwordInput = document.getElementById('password').value;
const passwordError = document.getElementById('password-error');
  const AddUserBtn = document.getElementById("addbutton");

  if (!PasswordRegex.test(passwordInput)) {
    AddUserBtn.disabled = true;
    passwordError.style.display = 'block';
  } else {
    AddUserBtn.disabled = false;
    passwordError.style.display = 'none';
  }
}

// crete table body
function createTableBody(users) {
  users.forEach((element) => {
    const tr = tBody.insertRow();
    tableHeaders.forEach((header) => {
      const td = tr.insertCell();
      if (header.Action !== "ACTION") {
        const key = Object.keys(header)[0];
        td.appendChild(document.createTextNode(element[key]));
      } else {
        let editbutton = document.createElement("button");
        editbutton.innerText = "Edit";
        editbutton.classList.add('edit');
        editbutton.onclick = () => editUser(element);
        td.appendChild(editbutton);

        let deletebutton = document.createElement("button");
        deletebutton.innerText = "Delete";
        deletebutton.classList.add('delete');
        deletebutton.onclick = () => deleteUser(element.id);
        td.appendChild(deletebutton);
      }
    });
  });
}
// refresh page
window.onload = (event) => {
  getData();
};
