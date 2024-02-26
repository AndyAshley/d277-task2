const submitBtn = document.getElementById("contact-button");
const fName = document.getElementById("first-name");
const lName = document.getElementById("last-name");
const email = document.getElementById("email");
const confirmEmail = document.getElementById("confirm-email");
const message = document.getElementById("message");

// event listener for the form submission
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // check if the emails match and if not, display an error message
  let isValidFormat = email.value.includes("@") && confirmEmail.value.includes("@");
  let emailsMatch = email.value.toLowerCase() === confirmEmail.value.toLowerCase();
  let existingError = document.getElementById("confirm-email-error");

  // remove any existing error message
  if (existingError) {
    existingError.remove();
  }

  // if the email is not valid or the emails do not match, display an error message
  if (!isValidFormat || !emailsMatch) {
    let error = document.createElement("span");
    error.id = "confirm-email-error";
    error.classList.add("form-error");

    if (!isValidFormat) {
      error.textContent = "* Please Enter a Valid Email Address";
      confirmEmail.parentNode.appendChild(error);
    } else if (!emailsMatch) {
      error.textContent = "* Email addresses must match";
      confirmEmail.parentNode.appendChild(error);
    }

    confirmEmail.parentNode.appendChild(error);
    return;
  }

  // collect the form data and just log it for the purpose of this task
  const data = {
    fName: fName.value,
    lName: lName.value,
    email: email.value,
    confirmEmail: confirmEmail.value,
    message: message.value,
  };

  console.log(data);
});
