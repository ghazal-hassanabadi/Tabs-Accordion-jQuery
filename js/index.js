$(function () {
  $(".faq-btn").on("click", function () {
    $(this).next(".faq-panel").toggleClass("hidden");
  });
});