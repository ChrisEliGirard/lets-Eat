// Assignment Code
var eatInBtn = document.querySelector("#eatIn");
var eatOutBtn = document.querySelector("#eatOut");
var inOrOutBtn = document.querySelector("#inOrOut");
var decision = ""
var i = ""

// Add event listener to generate button
eatInBtn.addEventListener("click", eatingIn);
eatOutBtn.addEventListener("click", eatingOut);
inOrOutBtn.addEventListener("click", eatingInOrOut);

// Write the function for choosing a random meal to make at home
function eatingIn(event) {
  decision = "eatIn"
  // Initialize Food Array and accompanying variables
  var food = ["Chicken Alfredo", "Breakfast Burritos", "Coffee 😅", "My Love"]
  itemSelector(food);
  food = food[i];
  console.log(food);
}

// Write the function for choosing a random restaurant to go to
function eatingOut(event) {  
  decision = "eatOut"
    // Initialize Restaurant Array and accompanying variables
    var restaurants = ["PDQ", "Starbucks", "Chipotle", "Cheddar's"]
    // Call Decision Making Function
    itemSelector(restaurants);
    // Return to function to finish the decision 
    restaurants = restaurants[i];
    console.log(restaurants);
}

// Write function to make the decision of eating in or out
function eatingInOrOut(event) {
  event.preventDefault();
  // Set array for the eat in or out coin flip and console log it
  var choiceInOut = ["inside", "outside"];
  // Placeholder to mess with later
  decision = "unknown"
  // Call Decision Making Function
  itemSelector(choiceInOut);
  // Return to function to finish the decision 
  choiceInOut = choiceInOut[i];
  console.log(choiceInOut)
  // If loop to decide which function to call after this function ends
  if (choiceInOut == "inside") {
    eatingIn();
  } else {
    eatingOut();
  }
}

// Write the function to clear out the buttons after the Selector has been initialized
function btnCleanUp() {
  var btnDelete = document.getElementById("buttonSpace");
  btnDelete.remove();
  let container = document.createElement("div");
  let elSubtitle = document.createElement("h3");
  let cardAddon = document.getElementById("selectorBody");
  cardAddon.after(container);
  container.appendChild(elSubtitle);
  elSubtitle.setAttribute("id", "cardFooterTitle");
  cardFooterTitle = document.getElementById("cardFooterTitle");
  cardFooterTitle.textContent = ("Problem Solved... I hope 😅");

}

// Write a math function
function itemSelector(x, y) {
  i = (Math.floor(Math.random()*x.length));
  return i
}

// Write Selected Restraunt to the #location input
function writeLocation() {
  var location = selectLocation();
  var locationText = document.querySelector("#location");
  locationText.value = location;
}