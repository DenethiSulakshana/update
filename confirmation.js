//code to get data from lacal storage 
document.addEventListener("DOMContentLoaded", () => {
  // Get the table body element
  const tableBody = document.querySelector('#detailsTableBody');
  
  // Retrieve formData from local storage
  const pData = JSON.parse(localStorage.getItem('pData'));
  const formData = JSON.parse(localStorage.getItem('form'));

  
  // Populate the table with formData
  if (pData){
    populateTable(pData);
  }
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

  //background image code 
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