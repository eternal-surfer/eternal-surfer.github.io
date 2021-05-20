function scrollToTop() {
  $('html, body').animate({ scrollTop: 0 }, 1500);
  return false;
}

function toggleScrollToTopButton() {
  var threshold = 200;
  if ($(window).scrollTop() > threshold) {
    $('#scroll-to-top').fadeIn('fast');
  } else {
    $('#scroll-to-top').fadeOut('fast');
  }
}

$(document).ready(function () {	
  $('#scroll-to-top').click(scrollToTop);
  $(window).scroll(toggleScrollToTopButton);
});
