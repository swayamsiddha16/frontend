
// Get the countItem element
const countItem = document.querySelector('.countItem');

// Get the addItem and subItem elements
const addItem = document.querySelector('.addItem');
const subItem = document.querySelector('.subItem');
const resetItem = document.querySelector('.resetItem');

let count;

// Function to update the count display
function updateCount() {
  countItem.textContent = count;
}

// Initialize the count value
function initializeCount() {
  count = Number(prompt("Enter the starting number:"));

  if (isNaN(count) || count < 0) {
    alert("Invalid input! Please enter a valid positive number.");
    count = 0;
  }

  updateCount();
}

// Call the initialization function after the page loads
window.addEventListener('DOMContentLoaded', initializeCount);

// Increment the count when the addItem is clicked
addItem.addEventListener('click', () => {
  count++;
  updateCount();
});

// Decrement the count when the subItem is clicked
subItem.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCount();
  }
});

// Reset the count to 0 when the resetItem is clicked
resetItem.addEventListener('click', () => {
  count = 0;
  updateCount();
});
//finished
