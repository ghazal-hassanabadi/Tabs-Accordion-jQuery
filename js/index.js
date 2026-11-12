$(function () {
  $(".faq-btn").on("click", function () {
    const panel = $(this).next(".faq-panel");

    $(".faq-panel").not(panel).addClass("hidden");
    panel.toggleClass("hidden");

    $(".faq-icon").removeClass("rotate-180");
    if (!panel.hasClass("hidden")) {
      $(this).find(".faq-icon").addClass("rotate-180");
    }
  });
});


/*--------tabs---------- */

  $(".tab-btn").on("click", function () {
    const name = $(this).data("tab");

    $(".tab-btn").attr("aria-selected", "false");
    $(this).attr("aria-selected", "true");

    $(".tab-panel").addClass("hidden");
    $(`[data-panel="${name}"]`).removeClass("hidden");
  });


 
  $(".topic-btn").on("click", function () {
    const list = $(this).closest(".topic-list");
    const panel = $(this).next(".topic-panel");

    list.find(".topic-panel").not(panel).addClass("hidden");
    panel.toggleClass("hidden");

    list.find(".topic-icon").removeClass("rotate-180");
    list.find(".topic-btn").attr("aria-expanded", "false");

    if (!panel.hasClass("hidden")) {
      $(this).find(".topic-icon").addClass("rotate-180");
      $(this).attr("aria-expanded", "true");
    }
  });

/*--------mobile menu---------- */
  $(".menu-btn").on("click", function () {
    const menu = $(".mobile-menu");
    menu.toggleClass("hidden");

    const isOpen = !menu.hasClass("hidden");
    $(this).attr("aria-expanded", isOpen);
    $(".menu-open").toggleClass("hidden", isOpen);
    $(".menu-close").toggleClass("hidden", !isOpen);
  });


  $(".mobile-menu a").on("click", function () {
    $(".mobile-menu").addClass("hidden");
    $(".menu-btn").attr("aria-expanded", "false");
    $(".menu-open").removeClass("hidden");
    $(".menu-close").addClass("hidden");
  });
