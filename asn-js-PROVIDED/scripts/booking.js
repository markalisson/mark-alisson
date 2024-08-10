/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// Variables
let dailyRate = 35; // Default to full-day rate
let dayCounter = 0; // Number of days selected
let totalCost = 0; // Calculated total cost

// Elements on the screen
const daysOfWeek = document.querySelectorAll('.day-selector'); // Assuming buttons for each day have this class
const halfDayButton = document.getElementById('half-day-button');
const fullDayButton = document.getElementById('full-day-button');
const clearButton = document.getElementById('clear-button');
const calculatedCostElement = document.getElementById('calculated-cost'); // Assuming there's an element to display the cost

// Initialize or reset variables when the page loads
function resetValues() {
    dailyRate = 35;
    dayCounter = 0;
    totalCost = 0;
    calculatedCostElement.innerHTML = '$0';
}
window.onload = resetValues;


// Add event listeners to each day button
daysOfWeek.forEach(day => {
    day.addEventListener('click', function() {
        // Check if the day is already selected
        if (!day.classList.contains('clicked')) {
            day.classList.add('clicked');
            dayCounter++; // Increment day counter
        }
        // Recalculate total cost
        calculateTotalCost();
    });
});


clearButton.addEventListener('click', function() {
    // Remove the "clicked" class from all days
    daysOfWeek.forEach(day => {
        day.classList.remove('clicked');
    });

    // Reset relevant variables
    resetValues();
});


halfDayButton.addEventListener('click', function() {
    dailyRate = 20; // Set the daily rate to $20
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    // Recalculate total cost
    calculateTotalCost();
});

fullDayButton.addEventListener('click', function() {
    dailyRate = 35; // Set the daily rate back to $35
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    // Recalculate total cost
    calculateTotalCost();
});


function calculateTotalCost() {
    totalCost = dayCounter * dailyRate; // Calculate the total cost
    calculatedCostElement.innerHTML = `$${totalCost}`; // Update the displayed cost
}
