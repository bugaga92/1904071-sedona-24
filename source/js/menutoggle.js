const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__open')) {
    navMain.classList.remove('main-nav__open');
  } else {
    navMain.classList.add('main-nav__open');
  }
});
