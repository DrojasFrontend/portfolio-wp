// Banner.js
import $ from 'jquery';

$(window).scroll(function() {
  const wScroll = $(this).scrollTop();
  $('.banner__content').css({
    'transform' : 'translate3d(0px, '+ wScroll /30 +'%, 0px)'
  });
})