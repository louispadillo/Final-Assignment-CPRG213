/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const daySelector =  document.getElementsByClassName("blue-hover");
const fullDay = document.getElementById("full");
const halfDay = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
let numofDaysSelected = 0;
let dayRate = 20;
let selectedDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
for (let i = 0; i < daySelector.length; i++) { 
    //because getElementByClassName returns an array/list, we have to use a for loop to access each element individually.
    daySelector[i].addEventListener("click", function() {
        // alert("hello");
        let day = document.getElementById(selectedDays[i]);
        // alert(selectedDays[i]);
        day.style.backgroundColor = "#E5AF42";
        numofDaysSelected += 1;
    });
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", function() {
    // alert("cleared");
    numofDaysSelected = 0;
    dayRate = 0; 
    calculateCost(dayRate);
    halfDay.style.backgroundColor = "white";
    fullDay.style.backgroundColor = "white";
    for (let i = 0; i < daySelector.length; i++) { 
        //because getElementByClassName returns an array/list, we have to use a for loop to access each element individually.
        // alert("hello");
        let day = document.getElementById(selectedDays[i]);
        // alert(selectedDays[i]);
        day.style.backgroundColor = "white";
    }
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDay.addEventListener("click", function() {
    halfDay.style.backgroundColor = "#E5AF42";
    dayRate = 20;
    calculateCost(dayRate);
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener("click", function() {
    fullDay.style.backgroundColor = "#E5AF42";
    dayRate = 35;
    calculateCost(dayRate);
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost(dayRate) {
    // alert(numofDaysSelected + " " + dayRate)
    let totalCost = numofDaysSelected * dayRate;
    document.getElementById("calculated-cost").innerHTML = totalCost;
}