// ============================================================
// PART 3 — DOM Manipulation
//
// Instructions:
//   - Write all your JavaScript here
//   - Open index.html in Live Server to test
//   - Do not edit index.html
//   - Answer EXPLAIN prompts as comments directly below each one
// ============================================================


// ------------------------------------------------------------
// SECTION A — Selecting Elements
// ------------------------------------------------------------
console.log("[ SECTION A — Selecting Elements ]")

// A1.
// Use getElementById to select the following elements.
// Look at index.html to find each element's id.
// Store each in its own variable and log all of them.
//
//   the h1
//   the p that shows the page status
//   the unordered list
const heading = document.getElementById("main-heading")
const subtitle = document.getElementById("subtitle")
const myList = document.getElementById("item-list")

console.log(heading)
console.log(subtitle)
console.log(myList)
// A2.
// Use querySelector to select the following elements.
// Store each in its own variable and log all of them.
//
//   the h2 — select it by its tag name
//   the "Toggle Highlight" button — select it by its id (look at index.html to find it)
//   a list item — select it by its class (look at index.html to find the class name)
const headingTwo = document.querySelector("h2")
const toggle = document.querySelector("#toggle-btn")
const list = document.querySelector(".list-item")

console.log(headingTwo)
console.log(toggle)
console.log(list)

// A3.
// Use querySelectorAll to select all elements with the class "list-item".
// Store the result in a variable and log it.
const allItems = document.querySelectorAll(".list-item")
console.log(allItems)

// A4.
// Use querySelectorAll to select all elements with the class "list-item".
// Loop over the result and log the text content of each one.
//
// Note: the result is a NodeList, not a plain array.
allItems.forEach(function(item){
    console.log(item.textContent)
})

// A5.
// EXPLAIN: What is the difference between getElementById and querySelector?
//          What does querySelectorAll return?
//          How is that different from a regular array?
// answer:
// getElementById only works with IDs and doesn't need # symbol.
// querySelector works with any selector like IDs, classes, and tags
// and needs # for id and . for class just like CSS.

// querySelectorAll returns a NodeList which contains all matching elements.

// A NodeList is different from a regular array because
// it only supports some methods like forEach but not
// map or filter like a regular array can.

// ------------------------------------------------------------
// SECTION B — Reading and Changing the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION B — Reading and Changing the DOM ]")

// B1.
// Select the h1 with the id "main-heading" and log its text content.
console.log(heading.textContent)

// B2.
// Select the p with the id "subtitle" and change its text to "Page loaded successfully."
// This should happen as soon as the page loads — not on a click.
subtitle.textContent = "Page loaded successfully."

// B3.
// Select the p with the id "output-text" and change its text to anything you choose.
const output = document.getElementById("output-text")
output.textContent = "Here is something."

// B4.
// Select the div with the id "output-box" and give it a background color of your choice.
// Do this with JavaScript — not by editing the CSS file.
const divName = document.querySelector("#output-box")
divName.style.backgroundColor = "blue"

// B5.
// EXPLAIN: What is textContent?
//          How is it different from innerHTML?
//          When would using innerHTML be risky?
//
//          answer:text content changes only the text inside an element.
//          innerHTML changes the HTML inside an element and can create 
//          html elements. inner html can be risky because user input
//          may contain harmful code that the broweser could run.


// ------------------------------------------------------------
// SECTION C — Responding to Events
// ------------------------------------------------------------
console.log("\n[ SECTION C — Responding to Events ]")

// C1.
// Add a click listener to the button with the id "change-btn".
// When clicked, change the text of the h1 with the id "main-heading" to any text you choose.
const changeButton = document.querySelector("#change-btn")
changeButton.addEventListener("click", function(){
    heading.textContent = "You clicked me!!"
})

// C2.
// Add a click listener to the button with the id "toggle-btn".
// When clicked, toggle the class "highlighted" on the p with the id "output-text".
// Add it if it is not there. Remove it if it is.
const changeToggle = document.querySelector("#toggle-btn")
changeToggle.addEventListener("click", function(){
    output.classList.toggle("highlighted")
})

// C3.
// Select the h1 with the id "main-heading" and add the class "active" to it.
// Log the element's class list to confirm the class is there.
//
// Then select one of the list items that already has the class "list-item".
// Remove that class from it.
// Log its class list to confirm the class is gone.
heading.classList.add("active")
console.log(heading.classList)
list.classList.remove("list-item")
console.log(list.classList)


// C4.
// EXPLAIN: What is an event listener?
//          Why can't you write the code outside of a function
//          and expect it to run when the button is clicked?
//
//          answer:An event listener waits for a specific event like a click and
//          then runs a function when that event happens.
//          we can't write code outside of the funciton because code outside
//          will run immediately when the page loads when inside the function,
//          it only runs once when the page load and never again when clicked.


// C5.
// EXPLAIN: What does classList.toggle do?
//          What does classList.add do? What does classList.remove do?
//          How are they different from setting element.className directly?
//
//          answer: classList,toggle adds a class if not there, removes it if it is.
//          classList.add() always adds a class.
//          classList.remove() always removes a class.
//          They are different from element.className because
//          className replaces all existing classes with a new value.
//          classList.add/remove/toggle only affects the specific class
//          that is mention and leaves all other classes alone.

// ------------------------------------------------------------
// SECTION D — Creating and Adding to the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION D — Creating and Adding to the DOM ]")

// D1.
// Create a new li element.
// Set its text content to any item you choose.
// Give it the class "list-item".
// Append it to the ul with the id "item-list".
const newItem = document.createElement("li")
newItem.textContent = "Mangoes"
newItem.classList.add("list-item")
myList.appendChild(newItem)

// D2.
// Add a click listener to the button with the id "add-btn".
// When clicked:
//   - Read the current value from the input with the id "item-input"
//   - Create a new li element and set its text to that value
//   - Give it the class "list-item"
//   - Append it to the ul with the id "item-list"
//   - Clear the input field after
const addButton = document.querySelector("#add-btn")
addButton.addEventListener("click", function(){
    const inputValue = document.getElementById("item-input").value
    const newLi = document.createElement("li")
    newLi.textContent = inputValue
    newLi.classList.add("list-item")
    myList.appendChild(newLi)
    document.getElementById("item-input").value=""
})

// D3.
// Select the p with the id "output-text" and remove it from the page entirely.
// After this runs, the element should no longer be visible.
output.remove()

// D4.
// EXPLAIN: What does createElement do?
//          What does appendChild do? What does remove() do?
//          When does the newly created element actually appear on the page?
//
//          answer:createElement creates a new element but not on page yet
//          appendChild adds the element to the page
//          remove() removes an element from the page
//          element only appears on page after appendChild is called!!

