//Navigation Scroll
$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $('header').addClass('nav-scroll');
  } else {
    $('header').removeClass('nav-scroll');
  }
});

//Hamburger Nav
const hamburger = document.querySelector
('burger-menu');
const navUL = document.querySelector
