$(function () {
  const $form = $("#contact-form");

  $form.on("submit", function (event) {

    event.preventDefault();

    const name = $("#name").val().trim();

    if (name === "") {
      $("#name-error").text("لطفاً نام خود را وارد کن.").removeClass("hidden");
    } else {
      $("#name-error").addClass("hidden");
    }
    
    const email = $("#email").val().trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      $("#email-error").text("لطفاً ایمیل خود را وارد کن.").removeClass("hidden");
    } else if (!emailPattern.test(email)) {
      $("#email-error").text("ایمیل واردشده معتبر نیست.").removeClass("hidden");
    } else {
      $("#email-error").addClass("hidden");
    }
        const subject = $("#subject").val();

    if (!subject) {
      $("#subject-error").text("لطفاً موضوع پیام را انتخاب کن.").removeClass("hidden");
    } else {
      $("#subject-error").addClass("hidden");
    }

    const message = $("#message").val().trim();

    if (message === "") {
      $("#message-error").text("لطفاً پیام خود را بنویس.").removeClass("hidden");
    } else {
      $("#message-error").addClass("hidden");
    }
  });
});