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
      // let message = document.getElementsByClassName("errorMessage")
      let messageEl = document.getElementById("messageEl")
     
      let error1 = field.previousElementSibling;
      let error2 = field.nextElementSibling;
      console.log(error1)
      console.log(error2)
      console.log(error2)
      if(field.value.trim() === ""){
              error2.innerHTML = `Input is mandatory in ${error1.innerHTML}`;
          }else {
              messageEl.textContent = "Successful";
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

// //boolean buttons

// let button = 0;
// const radio = document.querySelector(`input[name="gender"]`);

// function checkRadio(){
//   for (let i =0; i < radio.length; i++)
//   {
//       if (radio[i].checked){
//           a=1;
//           break;
//       }else{
//           a==0;
//       }
//   }
// }