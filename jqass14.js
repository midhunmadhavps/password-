$(document).ready(function () {
  $("body").on('click', '.toggle-password', function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $("#pass_log_id");
    if (input.attr("type") === "password") {
      input.attr("type", "text");

    }
    else if (input.attr("type") === "text") {
      input.attr("type", "password");
      setTimeout(change, 1000);
    }
  });

  function change() {
    input.attr("type", "password");
  }

});
