const menuBurger = document.querySelector('.nav__btn-toggle');
const navList = document.querySelector('.nav-list');

(function () {
  document.body.classList.replace('no-js', 'js')
})();

menuBurger.addEventListener('click', function () {
  this.classList.toggle('active');
  navList.classList.toggle('open');
  document.querySelector('.header__logo').classList.toggle('active-menu');
});
