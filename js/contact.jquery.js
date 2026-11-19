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
    const hasErrors = $(".field-error:not(.hidden)").length > 0;

    if (hasErrors) {
      return;
    }

    const $btn = $("#submit-btn");
    $btn.prop("disabled", true);
    $("#success-msg, #error-msg").stop(true, true).hide();

    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "POST",
      data: { name: name, email: email, subject: subject, message: message }
    })
      .done(function () {
        $("#success-msg").fadeIn(300).delay(4000).fadeOut(300);
        $form[0].reset();
      })
      .fail(function () {
        $("#error-msg").fadeIn(300);
      })
      .always(function () {
        $btn.prop("disabled", false);
      });
  });

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
});