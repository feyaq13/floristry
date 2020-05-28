import 'regenerator-runtime/runtime'

const menuBurger = document.querySelector('.nav__btn-toggle');
const navList = document.querySelector('.nav-list');

(function () {
  document.body.classList.replace('no-js', 'js')
})();

menuBurger.addEventListener('click', function () {
  this.classList.toggle('active');
  navList.classList.toggle('open');
  document.querySelector('.header__logo').classList.toggle('active-menu');
  document.body.classList.toggle('body--locked');
});

const carousel = document.getElementsByClassName('section-catalog__carousel')[0];
const cells = carousel.children;

window.onload = function () {

  (async function autoplay() {

    let prevCell;
    for (let i = 0; i < cells.length;) {

      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      if (prevCell) {
        prevCell.classList.remove('carousel-cell--active');
      }

      cells[i].classList.add('carousel-cell--active')
      prevCell = cells[i];

      if (i === cells.length - 1) {
        cells[i].classList.add('carousel-cell--active');
        i = 0;
        continue
      }

      i++
    }
  })();
};
