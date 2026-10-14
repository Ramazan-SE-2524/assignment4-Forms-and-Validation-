const form = document.getElementById("registerForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity("");
  }

  const fields = form.querySelectorAll("input:not([type='checkbox']), select");

  fields.forEach(function (field) {
    if (field.checkValidity()) {
      field.classList.add("is-valid");
      field.classList.remove("is-invalid");
    } else {
      field.classList.add("is-invalid");
      field.classList.remove("is-valid");
    }
  });
});

form.addEventListener("reset", function () {
  form.querySelectorAll(".is-valid,.is-invalid").forEach(function (field) {
    field.classList.remove("is-valid", "is-invalid");
  });
  confirmPassword.setCustomValidity("");
});
