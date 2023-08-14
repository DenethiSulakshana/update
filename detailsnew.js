//code to get data from lacal storage 
document.addEventListener("DOMContentLoaded", () => {
  // Get the table body element
  const tableBody = document.querySelector('#detailsTableBody');
  
  // Retrieve formData from local storage
  const formData = JSON.parse(localStorage.getItem('form'));
  
  // Populate the table with formData
  if (formData) {
    populateTable(formData);
  }
});

function populateTable(data) {
  const tableBody = document.querySelector('#detailsTableBody');
  
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const row = document.createElement('tr');
      const propertyCell = document.createElement('td');
      const valueCell = document.createElement('td');

      propertyCell.textContent = key;
      valueCell.textContent = data[key];

      row.appendChild(propertyCell);
      row.appendChild(valueCell);

      tableBody.appendChild(row);
    }
  }
}


 














  //country code
  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
  separateDialCode: true
  });




//form info

document.addEventListener("DOMContentLoaded", function() {
const form = document.getElementById("user-form");
const errorMessages = document.getElementById("error-messages");
const submit = document.getElementById("btn");

form.addEventListener("submit", function(event) {
  event.preventDefault();
    errorMessages.innerHTML = "";
    let isValid = true;

    const fullName = form["full-name"].value.trim();
    const mobileNumber = form["phone"].value.trim(); // corrected the field name
    const email = form["email"].value.trim();
    const confirmEmail = form["confirm-email"].value.trim();
    const gender = form["gender"].value;

    if (!fullName) {
        displayError("Full Name is required.");
        isValid = false;
    }
    
    if (!mobileNumber) {
        displayError("Mobile Number is required.");
        isValid = false;
    }
    
    if (!email) {
        displayError("Email is required.");
        isValid = false;
    }
    
    if (email !== confirmEmail) {
        displayError("Emails do not match.");
        isValid = false;
    }
    
    if (isValid) {
        // All input is valid, store data in local storage
        const pData = {
            fullName: fullName,
            mobileNumber: mobileNumber,
            email: email,
            gender: gender
        };
        localStorage.setItem("pData", JSON.stringify(pData));
        window.location.href = "payment.html";
     

      
  }
  submit.addEventListener("click",function(event){
        event.preventDefault();
      });
});
function displayError(message) {
  const errorMessage = document.createElement("p");
  errorMessage.innerText = message;
  errorMessages.appendChild(errorMessage);
}
});

  