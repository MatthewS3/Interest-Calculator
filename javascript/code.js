// Function definition for calculating Simple Interest
function Calculate() {
    // Retrieving input values from HTML elements
    let p = document.getElementById('amount').value; // Principal amount
    let t = document.getElementById('time').value;   // Time period
    let r = document.getElementById('rate').value;   // Interest rate

    // Calculating Simple Interest using the formula SI = (P * T * R) / 100
    let SI = (p * t * r) / 100;

    // Displaying the calculated Simple Interest in the 'si' HTML element
    document.getElementById('si').innerHTML = "The Total Simple Interest Is: " + SI;
}
