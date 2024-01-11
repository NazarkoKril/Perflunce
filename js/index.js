"use strick";
// faq list
document.addEventListener("DOMContentLoaded", function () {
  let faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach(function (faqItem) {
    faqItem.addEventListener("click", toggleAnswer);
  });

  function toggleAnswer(event) {
    let clickedItem = event.currentTarget;

    faqItems.forEach(function (item) {
      if (item !== clickedItem && item.classList.contains("open")) {
        item.classList.remove("open");
        let answer = item.querySelector(".faq__answer");
        answer.style.animation = "fadeOutUp 0.5s ease-out";
        setTimeout(function () {
          answer.style.display = "none";
        }, 500);
      }
    });

    clickedItem.classList.toggle("open");
    let answer = clickedItem.querySelector(".faq__answer");
    if (clickedItem.classList.contains("open")) {
      answer.style.display = "block";
      answer.style.animation = "fadeInDown 0.5s ease-out";
    } else {
      answer.style.animation = "fadeOutUp 0.5s ease-out";
      setTimeout(function () {
        answer.style.display = "none";
      }, 500);
    }
  }
});

// validator
function validateForm() {
  let nameInput = document.getElementById("name");
  let phoneInput = document.getElementById("phone");
  let emailInput = document.getElementById("email");
  let notRobot = document.getElementById("agreement").checked;

  let name = nameInput.value.trim();
  let phone = phoneInput.value.trim();
  let email = emailInput.value.trim();

  nameInput.classList.remove("error");
  phoneInput.classList.remove("error");
  emailInput.classList.remove("error");

  if (name === "") {
    alert("Будь ласка, введіть своє ім'я");
    nameInput.classList.add("error");
    return false;
  }

  let phoneRegex = /^\+?3?8?(0\d{9})$/;
  if (!phone.match(phoneRegex)) {
    alert("Будь ласка, введіть коректний номер телефону");
    phoneInput.classList.add("error");
    return false;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("Будь ласка, введіть коректну електронну пошту");
    emailInput.classList.add("error");
    return false;
  }

  if (!notRobot) {
    alert("Будь ласка, підтвердіть, що ви ознайомлені з користувацькою угодою");
    return false;
  }

  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
  });
  nameInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";
  document.getElementById("message").value = "";
  document.getElementById("agreement").checked = false;
  return false;
}
