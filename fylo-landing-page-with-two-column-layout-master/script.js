const email = document.querySelector("input.hero__email");
const error_message = document.querySelector("p.hero__error-message");
const hero_btn = document.querySelector("button.hero__btn");

/**
 *
 * @param {string} email - The email value from user
 * Checks if the email is valid and add/remove the error_message based on
 * if the email is valid
 *  */
function checkIfValid(email) {
  const regex = /[A-Za-z]+@[a-z]+\.(com|net|org)/;

  if (regex.test(email)) {
    error_message.style.display = "none";
    return;
  } else {
    error_message.style.display = "block";
  }
}

hero_btn.addEventListener("click", () => {
  const emailVal = email.value;
  checkIfValid(emailVal);
});
