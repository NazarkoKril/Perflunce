"use strick";

// валідація форми лог

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const requiredFields = ["email-or-phone", "password", "notRobot"];
    for (const field of requiredFields) {
      const input = document.getElementById(field);
      if (!input || !input.value.trim()) {
        alert(`Please fill in the ${field} field.`);
        return;
      }
    }

    const emailPhoneInput = document.getElementById("email-or-phone");
    const emailPhoneValue = emailPhoneInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex =
      /^\+?([0-9]{1,4})\)?[-. ]?([0-9]{1,12})[-. ]?([0-9]{1,6})$/;

    if (
      !(emailRegex.test(emailPhoneValue) || phoneRegex.test(emailPhoneValue))
    ) {
      alert("Please enter a valid email or phone number.");
      return;
    }

    const notRobotCheckbox = document.getElementById("notRobot");
    if (!notRobotCheckbox.checked) {
      alert("Please confirm that you are not a robot.");
      return;
    }

    window.location.href = "./indexSum.html";
  });
});
