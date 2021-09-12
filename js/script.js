var emailField = document.getElementById("emailInput");
var button = document.getElementById("emailButton");
var response = document.getElementById("emailResponse");

button.addEventListener("click", function () {
  var email = emailField.value;
  if (validateEmail(email)) {
    // response.innerHTML = "Cool! email is working...";
  } else {
    response.innerHTML = "Please check your email";
    emailField.setAttribute("style", "border-color: red;");
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
