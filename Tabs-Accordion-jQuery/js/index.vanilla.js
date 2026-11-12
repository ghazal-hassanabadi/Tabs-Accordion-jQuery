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