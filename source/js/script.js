const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__opened')) {
    navMain.classList.remove('main-nav__opened');
  } else {
    navMain.classList.add('main-nav__opened');
  }
});
