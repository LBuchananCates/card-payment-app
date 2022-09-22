const confirmButton = document.querySelector("#confirm-button");
const cardNumber = document.querySelector("#card-number");
const expDate = document.querySelector("#exp-date");
const cvc = document.querySelector("#CVC");
console.log("hewwo");


// button.addEventListener("click", confirmButton, false); /* button is the incorrect element */

const cardNumberBlank = document.querySelector("#card-number");
cardNumberBlank.addEventListener("click", cardNumberBlankClick, false);

function cardNumberBlankClick(event) {
    event.prevent