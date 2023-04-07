
// <div class="input-control">
// <label for="">FirstName:</label>
// <sup>*</sup>
// <input type="text" id="firstname" placeholder="Enter Your Firstname required>
// <p id="firstname-error">Please enter a valid name.</p>
// p{
//     display:none;
//     color:red
// }
// </div>

// firstname regex 
// const firstnameInput = document.getElementById('firstname');
// const firstnameError = document.getElementById('firstname-error');

// firstnameInput.addEventListener('input', () => {
//   const firstnameRegex = /^[A-Za-z]+$/;
//   if (!firstnameRegex.test(firstnameInput.value)) {
//     firstnameError.style.display = 'block';
//   } else {
//     lastnameError.style.display = 'none';
//   }
// })

// // lastname regex 
// const lastnameInput = document.getElementById('lastname');
// const lastnameError = document.getElementById('lastname-error');

// lastnameInput.addEventListener('input', () => {
//   const lastnameRegex = /^[A-Za-z]+$/;
//   if (!lastnameRegex.test(lastnameInput.value)) {
//     lastnameError.style.display = 'block';
//   } else {
//     lastnameError.style.display = 'none';
//   }
// })

// Phonenumber regex 
// const PhonenumberInput = document.getElementById('phonenumber');
// const PhonenumberError = document.getElementById('phonenumber-error');

// PhonenumberInput.addEventListener('input', () => {
//     const PhonenumberRegex = /^[8 9][0-9]{9}$/;
//     if (!PhonenumberRegex.test(PhonenumberInput.value)) {
//       PhonenumberError.style.display = 'block';
//     } else {
//       PhonenumberError.style.display = 'none';
//     }
//   })

// email regex 
// const EmailInput = document.getElementById('email');
// const EmailError = document.getElementById('Email-error');

// EmailInput.addEventListener('input', () => {
//   const EmailRegex = /^[a-zA-Z0-9._%+-]+@1rivet.com$/;
//   if (!EmailRegex.test(EmailInput.value)) {
//     EmailError.style.display = 'block';
//   } else {
//     EmailError.style.display = 'none';
//   }
// })

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


{/* <div class="input-control">
    <label for="">Email:</label>
    <sup>*</sup>
    <input type="email" id="email" placeholder="Enter Your Email"onkeyup="checkForm()"  required>
    <p id="Email-error">Please enter a valid Email.</p>
    <!-- onkeyup="checkForm()" input ma aapvanu-->
</div>
<button type="submit" onclick="addFromData()" id="addbutton" disabled>Add Users</button> */}
// empty form
// function checkForm() {
//   let firstname = document.getElementById("firstname").value;
//   let lastname = document.getElementById("lastname").value;
//   let phonenumber = document.getElementById("phonenumber").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;
//   const AddUserBtn = document.getElementById("addbutton");

//   if (firstname.trim() === "" || lastname.trim() === ""
//     || phonenumber.trim() === ""
//     || email.trim() === ""
//     | password.trim() === "") {
//     AddUserBtn.disabled = true;
//   } else {
//     AddUserBtn.disabled = false;
//   }
// }