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
