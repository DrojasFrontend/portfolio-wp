import $ from "jquery";

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
});
