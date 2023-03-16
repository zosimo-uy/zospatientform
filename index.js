let patientInfo =[];

const patientID = document.getElementById(`patientID`);
const firstName = document.getElementById(`firstName`);
const middleName = document.getElementById(`middleName`);
const lastName = document.getElementById(`lastName`);
const userAddress = document.getElementById(`userAddress`);
const birthDate = document.getElementById(`birthDate`);
const contactNumber = document.getElementById(`contactNumber`);
const Gender = document.getElementById(`Gender`);
const medicalHistory = document.querySelectorAll(`input[name="medicalHistory"]`);
const currentSymptoms = document.getElementById(`currentSymptoms`);
const medication = document.getElementsByClassName(`medication`);
const medicationBox = document.getElementById(`medicationBox`);
let medicalHistoryValues = [];

function savePatient () {
    const medication = document.querySelector('input[name="medication"]:checked').value;
    medicalHistory.forEach((checkbox) => {
        if (checkbox.checked) {
            medicalHistoryValues.push(checkbox.value);
        }
    });

    let patient = {
        patientID: patientID.value,
        firstName: firstName.value,
        middleName: middleName.value,
        lastName: lastName.value,
        userAddress: userAddress.value,
        birthDate: birthDate.value,
        contactNumber: contactNumber.value,
        Gender: Gender.value,
        medicalHistory: medicalHistory.value,
        currentSymptoms: currentSymptoms.value,
        medication: medication.value,
        medicalHistoryValues: medicalHistoryValues,
        medicationBox: medicationBox.value
      };

    let storedPatientForms = localStorage.getItem(patient.patientID);

    let patientForms = storedPatientForms ? JSON.parse(storedPatientForms) : []; 
    patientForms.push(patient);
    localStorage.setItem(patient.patientID, JSON.stringify(patientForms));
  
}

// let display = document.querySelector(`#display`);
// display.innerHTML = display;


function showInput() {
    medicationBox.classList.remove("d-none");
    medicationBox.classList.add("d-block");
}
function hideInput() {
    medicationBox.classList.remove("d-block");
    medicationBox.classList.add("d-none");
}

window.onload = function() {
    let patientForm = document.getElementById(`patientForm`);
    patientForm.onsubmit = savePatient; //Trigger the onsubmit event

    // let btnRetrieve = document.getElementById("btnRetrieve");
    // btnRetrieve.onclick = carRetrieve;
};