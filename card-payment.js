const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#CVC");
const errorMessage = document.querySelector("error-border");
const confirmButton = document.querySelector("#confirm-button");
const confirmationMessage = document.querySelector("#confirmation-message");
const showError = document.querySelector("#error");

// to-do:
// 2) if all info entered correctly, confirm button should replace 16 digit number with # entered in cardnumber blank and cvc
// 3) confirm button should also take you to pop up that says thank you for submitting

function showErrorBorder(submitCardInfo) {
  if (month.value === "" || month.value == null) {
    month.classList.add("error-border");
    // month.classList.add("error-message");
  }
  if (year.value === "" || year.value == null) {
    year.classList.add("error-border");
    // year.classList.add("error-message");
  }
  if (cvc.value === "" || cvc.value == null) {
    cvc.classList.add("error-border");
    // cvc.classList.add("error-message");
  }
  submitCardInfo.preventDefault();
}
confirmButton.addEventListener("click", showErrorBorder);

const checkMonth = () => {
  let valid = false;
  if (!isRequired(month)) {
    showError(month, "Cannot be blank.");
  } else {
    showSuccess(month);
    valid = true;
  }
  return valid;
};

const checkYear = () => {
  let valid = false;
  if (!isRequired(year)) {
    showError(year, "Cannot be blank.");
  } else {
    showSuccess(year);
    valid = true;
  }
  return valid;
};

const checkCVC = () => {
  let valid = false;
  if (!isRequired(cvc)) {
    showError(cvc, "Cannot be blank.");
  } else {
    showSuccess(cvc);
    valid = true;
  }
  return valid;
};

form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate forms
  let isMonthValid = checkMonth(),
    isYearValid = checkYear(),
    isCVCValid = checkCVC();

  let isFormValid = isMonthValid && isYearValid && isCVCValid;

  // submit to the server if the form is valid
  if (isFormValid) {
  }
});
// function submitForm() {
//   if ((month.value = true)) {
//     submitCardInfo.preventDefault();
//   }
//   if ((year.value = true)) {
//     submitCardInfo.preventDefault();
//   }
//   if ((cvc.value = true)) {
//     submitCardInfo.preventDefault();
//   }
// }
// confirmButton.addEventListener("click", confirmationMessage);

// if all blanks are filled in, submit form and display confirmation messages
// then submit form = show #confirmation-message "thank you we've added your card details continue
// button LEAVE THIS and MATCH input card-number with that of card number content of div #fake-number
