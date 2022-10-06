const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#CVC");
const errorMessage = document.querySelector("error-border");
const confirmButton = document.querySelector("#confirm-button");
const confirmationMessage = document.querySelector("#confirmation-message");

// to-do:
// 2) if all info entered correctly, confirm button should replace 16 digit number with # entered in cardnumber blank and cvc
// 3) confirm button should also take you to pop up that says thank you for submitting

function doTheThing(something) {
  if (month.value === "" || month.value == null) {
    // add error-border class to input field
    month.classList.add("error-border");
  }

  if (year.value === "" || year.value == null) {
    year.classList.add("error-border"); // red alert can't be blank //
  }

  if (cvc.value === "" || cvc.value == null) {
    cvc.classList.add("error-border");
  } // then submit form = show confirmation message "thank you we've added your card details continue button LEAVE THIS //

  something.preventDefault();
}

// 1. if everything is typed in wrong or right
confirmButton.addEventListener("click", doTheThing);
