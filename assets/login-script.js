//mobile menu functionality
function mobileMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const overlay = document.getElementById("overlay");
  const sideMenu = document.getElementById("side-menu");
  const backMenu = document.getElementById("back-menu");

  menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("show");
    overlay.classList.add("show");
  });

  overlay.addEventListener("click", () => {
    sideMenu.classList.remove("show");
    overlay.classList.remove("show");
  });

  backMenu.addEventListener("click", () => {
    sideMenu.classList.remove("show");
    overlay.classList.remove("show");
  });
} // JavaScript for the side menu functionality

mobileMenu();

// Login Validation

function validationForm(event) {
  event.preventDefault(); // Pr
  // event form submission
  const successMessage = document.getElementById("successMessage");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let validLogin = true;

  // Resetting value
  document.getElementById("usernameError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  //check if username is empty or less than 4 characters
  if (username === "") {
    document.getElementById("usernameError").textContent =
      "username is empty please fill it in";
    document.getElementById("usernameError").classList.add("error-message");
    validLogin = false;
  } else if (username.length < 4) {
    document.getElementById("usernameError").textContent =
      "Username must be at least 4 characters long";
    document.getElementById("usernameError").classList.add("error-message");
    validLogin = false;
  } else {
    document.getElementById("usernameError").textContent = "";
    document.getElementById("usernameError").classList.remove("error-message");
  }

  // Check if password is empty
  if (password === "") {
    document.getElementById("passwordError").textContent =
      "Password is empty, please fill it in";
    document.getElementById("passwordError").classList.add("error-message");
    validLogin = false;
  } else {
    document.getElementById("passwordError").textContent = "";
    document.getElementById("passwordError").classList.remove("error-message");
  }

  // Check if both username and password are valid
  if (validLogin === true) {
    successMessage.textContent = "Login successful!";
    successMessage.classList.add("success-message");
  } else {
    successMessage.classList.remove("success-message");
  }
  // Return the validation status
  return validLogin;
}
