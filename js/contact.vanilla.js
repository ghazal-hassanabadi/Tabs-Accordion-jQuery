const form = document.querySelector("#contact-form");
const btn = document.querySelector("#submit-btn");
const successMsg = document.querySelector("#success-msg");
const errorMsg = document.querySelector("#error-msg");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let hideTimer;

function showError(id, text) {
  const el = document.querySelector("#" + id);
  el.textContent = text;
  el.classList.remove("hidden");
}

function hideError(id) {
  document.querySelector("#" + id).classList.add("hidden");
}

function hideMessages() {
  clearTimeout(hideTimer);

  [successMsg, errorMsg].forEach(function (el) {
    el.getAnimations().forEach(function (animation) {
      animation.cancel();
    });
    el.classList.add("hidden");
  });
}

function showMessage(el, autoHide) {
  el.classList.remove("hidden");
  el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 });

  if (autoHide) {
    hideTimer = setTimeout(function () {
      const fadeOut = el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300 });

      fadeOut.onfinish = function () {
        el.classList.add("hidden");
      };
    }, 4000);
  }
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const subject = document.querySelector("#subject").value;
  const message = document.querySelector("#message").value.trim();

  if (name === "") {
    showError("name-error", "لطفاً نام خود را وارد کن.");
  } else {
    hideError("name-error");
  }

  if (email === "") {
    showError("email-error", "لطفاً ایمیل خود را وارد کن.");
  } else if (!emailPattern.test(email)) {
    showError("email-error", "ایمیل واردشده معتبر نیست.");
  } else {
    hideError("email-error");
  }

  if (!subject) {
    showError("subject-error", "لطفاً موضوع پیام را انتخاب کن.");
  } else {
    hideError("subject-error");
  }

  if (message === "") {
    showError("message-error", "لطفاً پیام خود را بنویس.");
  } else {
    hideError("message-error");
  }

  const hasErrors = document.querySelectorAll(".field-error:not(.hidden)").length > 0;

  if (hasErrors) {
    return;
  }

  btn.disabled = true;
  hideMessages();

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: new URLSearchParams({ name: name, email: email, subject: subject, message: message })
    });

    if (!response.ok) {
      throw new Error("request failed");
    }

    showMessage(successMsg, true);
    form.reset();
  } catch (error) {
    showMessage(errorMsg, false);
  } finally {
    btn.disabled = false;
  }
});

/*-------mobile-menu---------*/

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

function closeMenu() {
  mobileMenu.classList.add("hidden");
  menuBtn.setAttribute("aria-expanded", "false");
  menuOpen.classList.remove("hidden");
  menuClose.classList.add("hidden");
}

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");

  const isOpen = !mobileMenu.classList.contains("hidden");
  this.setAttribute("aria-expanded", isOpen);
  menuOpen.classList.toggle("hidden", isOpen);
  menuClose.classList.toggle("hidden", !isOpen);
});

mobileMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});