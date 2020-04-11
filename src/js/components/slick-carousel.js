// slider.js
import $ from "jquery";
import "./slick";

$(".testimonial-slick").slick({
  fade: false,
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 3000,
  useTransform: true
});
