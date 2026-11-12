const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const panel = this.nextElementSibling;
    const icon = this.querySelector(".faq-icon");

    document.querySelectorAll(".faq-panel").forEach(function (p) {
      if (p !== panel) p.classList.add("hidden");
    });

    document.querySelectorAll(".faq-icon").forEach(function (i) {
      i.classList.remove("rotate-180");
    });

    panel.classList.toggle("hidden");

    if (!panel.classList.contains("hidden")) {
      icon.classList.add("rotate-180");
    }
  });
});

/*-------tabs--------*/

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const name = this.dataset.tab;


    tabButtons.forEach(function (b) {
      b.setAttribute("aria-selected", "false");
    });

    this.setAttribute("aria-selected", "true");
    
    tabPanels.forEach(function (p) {
      p.classList.add("hidden");
    });

   
    document.querySelector('[data-panel="' + name + '"]').classList.remove("hidden");
  });
});

/*------tabs accordion------*/


const topicButtons = document.querySelectorAll(".topic-btn");

topicButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const list = this.closest(".topic-list");
    const panel = this.nextElementSibling;
    const icon = this.querySelector(".topic-icon");

    list.querySelectorAll(".topic-panel").forEach(function (p) {
      if (p !== panel) p.classList.add("hidden");
    });

    list.querySelectorAll(".topic-icon").forEach(function (i) {
      i.classList.remove("rotate-180");
    });
    list.querySelectorAll(".topic-btn").forEach(function (b) {
      b.setAttribute("aria-expanded", "false");
    });

    panel.classList.toggle("hidden");

    if (!panel.classList.contains("hidden")) {
      icon.classList.add("rotate-180");
      this.setAttribute("aria-expanded", "true");
    }
  });
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