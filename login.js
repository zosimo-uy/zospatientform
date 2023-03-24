//login page

class ValidateForm {
  constructor(form,fields){
      this.form = form;
      this.fields = fields;
  }

  initialized(){
      // console.log(this.form)
      // console.log(this.fields)
      this.validateOnInput();
      this.validateOnSubmit();
  }

  validateOnInput(){
      let selfForm = this
      this.fields.forEach( field => {
          let input = document.querySelector(`#${field}`)
          input.addEventListener("input",()=>{
              selfForm.validateField(input);
          })
      });
  }
  
  validateFields(field){
        //declare global variable
        let userName = document.getElementById("username").value;
        let passWord = document.getElementById("password").value;
        //Test if usewr could pass data
            // alert(userName);
            // alert(passWord);
        let accountData = JSON.parse(localStorage.getItem('Account'));//get the data from the local storage
      // let message = document.getElementsByClassName("errorMessage")
      let messageEl = document.getElementById("messageEl");

      if (userName == accountData.username && passWord == accountData.password) {
        //debugging purposes
        // alert(${userName} = ${accountData.username} 
        // ----${passWord}=${accountData.password});

        //direct in other page if the credentials matches
        window.open('patientform.html');

    }else{
        alert(`Credentials incorrect please try again`);
        messageEl.innerText = `Incorrect login information`;
        messageEl.style.color = 'Red';
        messageEl.style.fontSize = `20px`;
        messageEl.style.fontWeight = `bold`;
        alert(`please use the the placeholder title`)
        }
     }

  validateOnSubmit() {
      
      let selfForm = this;
      this.form.addEventListener("submit", (event)=>{
          event.preventDefault();

          selfForm.fields.forEach( field => {
              let input = document.querySelector(`#${field}`)
              selfForm.validateFields(input);
          })
      })
  }
}
  
let disForm = document.querySelector('#loginForm')
let disField = ["username","password"];

let newAccount = new ValidateForm(disForm,disField);

newAccount.initialized();

//creating an object
let account={
    username: "admin",
    password: "admin"
}

localStorage.setItem('Account',JSON.stringify(account));


// function loginAccount(){
//             //declare global variable
//         let userName = document.getElementById("username").value;
//         let passWord = document.getElementById("password").value;
//         //Test if usewr could pass data
//             // alert(userName);
//             // alert(passWord);
//         let accountData = JSON.parse(localStorage.getItem('Account'));//get the data from the local storage

//         //compare the data from the local storage
//         if (userName == accountData.username && passWord == accountData.password) {
//                     //debugging purposes
//                     // alert(${userName} = ${accountData.username} 
//                     // ----${passWord}=${accountData.password});

//                     //direct in other page if the credentials matches
//                     window.open('patientform.html');

//         }
//         else{
//             alert(`Does not Match`);
//         }
// }
// function navigateToPage(event) {
//     event.preventDefault(); // Prevent the default link behavior
//     window.location.assign('next.html'); // Navigate to the link
//   }
// //getting data from user
// window.onload = function(){
//     //get the id of the form
//     let loginFormId = document.getElementById('loginForm');
//     loginFormId.onsubmit = loginAccount;

// }