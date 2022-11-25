const cardName = document.querySelector("#full-name");
const cardNumber = document.querySelector("#card-number");
const cardMonth = document.querySelector("#month");
const cardYear = document.querySelector("#year");
const cardCVC = document.querySelector("#CVC");
const confirmButton = document.querySelector("#confirm-button");

const errorMessage = document.querySelector("#error-border");
const showError = document.querySelector("#error");
const inputs = document.querySelectorAll("input");
const form = document.querySelector("#form");

// if someone fucks up the form, show these error features
function showErrorBorder(submitCardInfo) {
  if (cardMonth.value === "" || cardMonth.value == null) {
    // turns border red
    cardMonth.classList.add("error-border");
    // displays error message
    showError.style.visibility = "visible";
  }

  if (cardYear.value === "" || cardYear.value == null) {
    // turns border red
    cardYear.classList.add("error-border");
    // displays error message
    showError.style.visibility = "visible";
  }

  if (cardCVC.value === "" || cardCVC.value == null) {
    // turns border red
    cardCVC.classList.add("error-border");
    // displays error message
    showError.style.visibility = "visible";
  }
  // when clicking submit with errors, doesn't refresh page, displays errors
  submitCardInfo.preventDefault();
}
confirmButton.addEventListener("click", showErrorBorder);

// everything above is correct; do not change!!! //

// allows card info input to replace example card info shown on card images //
const exampleCardNumber = document.querySelector("#example-number");
const exampleCardName = document.querySelector("#example-name");
const exampleCardMonth = document.querySelector("#example-month");
const exampleCardCVC = document.querySelector("#example-cvc");
const exampleCardYear = document.querySelector("#example-year");

cardName.oninput = () => {
  exampleCardName.innerText = cardName.value;
  cardName.classList.remove("error");
};

cardNumber.oninput = () => {
  exampleCardNumber.innerText = cardNumber.value;
  cardNumber.classList.remove("error");

  // exampleCardNumber.innerText.push(" ")
  // space numbers out every 4 numbers
};
function limit(element, maxChars) {
  if (element.value.length > maxChars) {
    element.value = element.value.substr(0, maxChars);
  }
}

cardMonth.oninput = () => {
  exampleCardMonth.innerText = cardMonth.value;
  cardMonth.classList.remove("error");
};

cardYear.oninput = () => {
  exampleCardYear.innerText = cardYear.value;
  cardYear.classList.remove("error");
};

cardCVC.oninput = () => {
  exampleCardCVC.innerText = cardCVC.value;
  cardCVC.classList.remove("error");
};

//IF ALL CONDITIONS ARE MET //
// if (inputs.innerText =
confirmButton.addEventListener("click", function (e) {
  const confirmationMessage = document.querySelector("#confirmation-message");
  form.style.display = "none";
  confirmationMessage.style.display = "flex";
});
