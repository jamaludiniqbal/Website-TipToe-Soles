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

function validation(event) {
  // Prevent from submission for validation
  event.preventDefault();

  // declaration
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pref = document.getElementById("pref-contact").value;
  const enquiry = document.getElementById("enquiry").value.trim();
  const checkbox = document.getElementById("consent");
  let isValid = true;

  // check validation name
  if (name === "") {
    document.getElementById("nameError").textContent = "Please input your name";
    document.getElementById("nameError").classList.add("error-message");
    isValid = false;
  } else if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "Please input at least 2 character";
    document.getElementById("nameError").classList.add("error-message");
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
    document.getElementById("nameError").classList.remove("error-message");
  }

  // check validation email
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent =
      "Please input your email";
    document.getElementById("emailError").classList.add("error-message");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    document.getElementById("emailError").classList.add("error-message");
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
    document.getElementById("emailError").classList.remove("error-message");
  }

  // check validation preferred contact
  if (pref === "no-select") {
    document.getElementById("prefError").textContent =
      "Not Selected. Please select one of the option";
    document.getElementById("prefError").classList.add("error-message");
    isValid = false;
  } else {
    document.getElementById("prefError").textContent = "";
    document.getElementById("prefError").classList.remove("error-message");
  }

  // check validation enquiry
  if (enquiry === "") {
    document.getElementById("enquiryError").textContent =
      "Please input your enquiry";
    document.getElementById("enquiryError").classList.add("error-message");
    isValid = false;
  } else if (enquiry.length < 20) {
    document.getElementById("enquiryError").textContent =
      "Please input at least 20 characters";
    document.getElementById("enquiryError").classList.add("error-message");
    isValid = false;
  } else {
    document.getElementById("enquiryError").textContent = "";
    document.getElementById("enquiryError").classList.remove("error-message");
  }

  // check validation checkbox
  if (!checkbox.checked) {
    document.getElementById("consentError").textContent =
      "Please click the checkbox";
    document.getElementById("consentError").classList.add("error-message");
    isValid = false;
  } else {
    document.getElementById("consentError").textContent = "";
    document.getElementById("consentError").classList.remove("error-message");
  }

  // If all validations pass, show success message
  if (isValid) {
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.add("success-message");
    successMessage.textContent = "Form submitted successfully!";
    return true;
  } else {
    console.log("form is not valid");
    return false;
  }
}
