const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.querySelector("#name");
  const nameError = document.querySelector("#name-error");
  const name = nameInput.value.trim();

  if (name === "") {
    nameError.textContent = "لطفاً نام خود را وارد کن.";
    nameError.classList.remove("hidden");
  } else {
    nameError.classList.add("hidden");
  }

  const emailInput = document.querySelector("#email");
  const emailError = document.querySelector("#email-error");
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.textContent = "لطفاً ایمیل خود را وارد کن.";
    emailError.classList.remove("hidden");
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "ایمیل واردشده معتبر نیست.";
    emailError.classList.remove("hidden");
  } else {
    emailError.classList.add("hidden");
  }

  const subjectInput = document.querySelector("#subject");
  const subjectError = document.querySelector("#subject-error");
  const subject = subjectInput.value;

  if (!subject) {
    subjectError.textContent = "لطفاً موضوع پیام را انتخاب کن.";
    subjectError.classList.remove("hidden");
  } else {
    subjectError.classList.add("hidden");
  }

  const messageInput = document.querySelector("#message");
  const messageError = document.querySelector("#message-error");
  const message = messageInput.value.trim();

  if (message === "") {
    messageError.textContent = "لطفاً پیام خود را بنویس.";
    messageError.classList.remove("hidden");
  } else {
    messageError.classList.add("hidden");
  }
});