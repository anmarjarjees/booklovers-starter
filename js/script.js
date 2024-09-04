// Get the current year with getFullYear() method
const currentYear = new Date().getFullYear();

// Set the year in the footer
document.getElementById('current-year').textContent = currentYear;
/* 
NOTE:
we can also use "innerText" instead of "textContent"
Generally, "textContent" is preferred for its simplicity and speed.
If you need the text as it appears to the user, 
with styles applied and hidden elements excluded, 
"innerText" is more appropriate.
*/

// Example for 'Load More Books' button
// Event Handling: Add interactivity for buttons (e.g., load more books).
document.getElementById('load-more').addEventListener('click', () => {
    alert('Load more books functionality will be implemented.');
});

/* 
Using a callback function:
function() {

}

or using ES6 arrow function:
() => {

}

To review the benefit of arrow functions:
*****************************************

1. Conciseness: 
Arrow functions use a shorter syntax, making code more compact and readable

2. Inherits "this": 
They inherit/use "this" from their surrounding context (code), avoiding issues with the "this" keyword in callbacks

Implicit Return: 
Single-expression arrow functions can return values without needing curly braces or the "return" keyword
*/