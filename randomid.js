// /*use var as it changes the value of randomID*/
// var MyLib = {
//   //Add more zeros to increase the value.
//   lastUid : 100000000, 

//   generateUid : function(){
//       this.lastUid++;
//       //Way to get a random int value betwen min and max: 
//       //Math.floor(Math.random() * (max - min) ) + min;
//       var randValue = Math.floor(Math.random() * (99999 - 10000)) + 10000;
//       return Number(this.lastUid.toString() + randValue);
      
//   }
// }

// function randomID(){
//   let randomID = document.getElementById(`patientIdBtn`);
//   let patientID = document.getElementById(`patientID`);

//   if(randomID){
//     patientID.innerText = (MyLib.generateUid());
//     console.log(patientID.innerText);
//   }
// }

// function run(){
//   document.querySelector(`#patientIdBtn`).addEventListener(`click`,function(){
//     randomID();
//   })
// }
// run();

// let removeMe = randomID;
// function removeRun(event){
//   removeMe.removeEventListener(`click`,removeRun);
//     removeevent.preventDefault()
//   }


/* / testing of the actual variable + the function

console.log(MyLib.generateUid());
alert(`${MyLib.generateUid()}`);

*/