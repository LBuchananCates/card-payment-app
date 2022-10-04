const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#CVC");
const errorMessage = document.querySelector("#error");
const confirmButton = document.querySelector("#confirm-button");

// to-do:
// 2) if all info entered correctly, confirm button should replace 16 digit number with # entered in cardnumber blank and cvc
// 3) confirm button should also take you to pop up that says thank you for submitting

// 1. if everything is typed in wrong or right
confirmButton.addEventListener("click", () => {
  if (month.value === "" || month.value == null) {
    // if month blank //
    alert("Can't be blank"); // display message can't be blank
  } else if (year.value === "" || year.value == null) {
    // if year blank //
    alert("Can't be blank"); // red alert can't be blank //
  } else if (cvc.value === "" || cvc.value == null) {
    alert("can't be blank");
  } else e.preventDefault(); // then submit form = show confirmation message "thank you we've added your card details continue button LEAVE THIS //
});

// 2. when typed correctly, submit button displays thank you screen
