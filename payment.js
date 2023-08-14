 //code to get data from lacal storage 
document.addEventListener("DOMContentLoaded", () => {
  // Get the table body element
  const tableBody = document.querySelector('#detailsTableBody');
  
  // Retrieve formData from local storage
  const formData = JSON.parse(localStorage.getItem('form'));
  const pData = JSON.parse(localStorage.getItem('pData'));
  
  // Populate the table with formData
  if (formData) {
    populateTable(formData);
  }
  if (pData){
    populateTable(pData);
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

  // Form validation and enabling Pay button
  const paymentForm = document.getElementById('paymentForm');
  const payButton = document.getElementById('payButton');

  // JavaScript code to enforce maximum length and numeric input
document.getElementById('cardNumber').addEventListener('input', function () {
  this.value = this.value.slice(0, 12); // Enforce maximum length of 12 characters

  // Remove non-numeric characters
  this.value = this.value.replace(/\D/g, '');
});

  paymentForm.addEventListener('input', function () {
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvc = document.getElementById('cvc').value;
    const nameOnCard = document.getElementById('nameOnCard').value;

    if (cardNumber && expiryDate && cvc && nameOnCard) {
      payButton.disabled = false;
    } else {
      payButton.disabled = true;
    }
  });

  // Redirect to Confirmation page on form submission
  paymentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Add your logic here for processing the payment and redirecting to the Confirmation page.
    // For this example, let's simply redirect to a "confirmation.html" page.

    window.location.href = 'confirmation.html';
  });
  window.addEventListener('DOMContentLoaded', function() {
    var watermark = document.createElement('div');
    watermark.style.position = 'fixed';
    watermark.style.bottom = '10px';
    watermark.style.right = '0px';
    watermark.style.top = '0px';
    watermark.style.left = '80px';
    watermark.style.opacity = '0.5'; /* Adjust opacity to control watermark visibility */
    watermark.style.pointerEvents = 'none'; /* Allows clicks to pass through the watermark */
    watermark.style.backgroundImage = 'url("mark.png")'; /* Replace with the actual path */
    watermark.style.backgroundRepeat = 'no-repeat'; /* Use 'repeat-x' or 'repeat-y' to repeat only in one direction */
    watermark.style.width = '100%';
    watermark.style.height = '100%';
    document.body.appendChild(watermark);

    window.addEventListener('scroll', function() {
      var scrollY = window.scrollY || window.pageYOffset; /* Get the vertical scroll position */
      watermark.style.top = (0 + scrollY) + 'px'; /* Adjust the position based on the scroll */
    });
  });