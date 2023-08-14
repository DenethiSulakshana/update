document.addEventListener("DOMContentLoaded", function() {
    const selectedDateInput = document.getElementById("selected-date");
    const ticketsTable = document.getElementById("tickets-table");
    const totalPayable = document.getElementById("total-paypal");
    const continueButton = document.getElementById("continue-button");
    
    const prices = {
      "Foreigner Adult": { normal: 10, peak: 13 },
      "Foreigner Child": { normal: 5, peak: 8 },
      "SL Adult": { normal: 4, peak: 6 },
      "SL Child": { normal: 2, peak: 3 },
      "Infant": { normal: 0, peak: 0 } // Infants are free
    };
    
    const peakHours = [4, 5, 6, 9, 10, 11]; // Adjust the peak hours accordingly
    
    function updateSummary() {
      const date = selectedDateInput.value;
      const duration = parseInt(document.getElementById("duration").value);
    
      const ticketData = [
        // Format: [Ticket Category, Quantity]
        ["Foreigner Adult", parseInt(document.getElementById("foreigner-adult").value)],
        ["Foreigner Child", parseInt(document.getElementById("foreigner-child").value)],
        ["SL Adult", parseInt(document.getElementById("sl-adult").value)],
        ["SL Child", parseInt(document.getElementById("sl-child").value)],
        ["Infant", parseInt(document.getElementById("infant").value)]
        // Add other ticket categories here
      ];
    
      const tableBody = document.getElementById("tickets-table");
      tableBody.innerHTML = "";
    
      // Calculate total payable
      let total = 0;
    
      // Create and populate the tickets table
      for (const [category, quantity] of ticketData) {
        if (quantity > 0) {
          const row = tableBody.insertRow();
          const cellCategory = row.insertCell();
          const cellDate = row.insertCell();
          const cellTime = row.insertCell();
          const cellDuration = row.insertCell();
          const cellQuantity = row.insertCell();
          const cellPrice = row.insertCell();
    
          const price = peakHours.includes(duration) ? prices[category].peak * quantity : prices[category].normal * quantity;
    
          cellCategory.textContent = category;
          cellDate.textContent = date;
          cellTime.textContent = document.getElementById("duration").options[duration - 1].text;
          cellDuration.textContent = `${1} hour(s)`;
          cellQuantity.textContent = quantity;
          cellPrice.textContent = `$${price}`;
    
          total += price;
        }
      }
    
      totalPayable.textContent = `$${total}`;
      continueButton.disabled = total === 0;
  
      // Store the data in local storage
      const form = {
        date: date,
        duration: duration,
        ticketData: ticketData,
        total:"$"+total
      };
      localStorage.setItem("form", JSON.stringify(form));
    }
    
    selectedDateInput.addEventListener("change", updateSummary);
    document.getElementById("duration").addEventListener("change", updateSummary);
    document.getElementById("foreigner-adult").addEventListener("change", updateSummary);
    document.getElementById("foreigner-child").addEventListener("change", updateSummary);
    document.getElementById("sl-adult").addEventListener("change", updateSummary);
    document.getElementById("sl-child").addEventListener("change", updateSummary);
    document.getElementById("infant").addEventListener("change", updateSummary);
  
    continueButton.addEventListener("click", function() {
      window.location.href = "detailsnew.html";
    });
    
    // Update summary initially
    updateSummary();
  });
  