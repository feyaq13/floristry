import 'regenerator-runtime/runtime';

initJS();

const menuBurger = document.querySelector('.nav__btn-toggle');
const navList = document.querySelector('.nav-list');

menuBurger.addEventListener('click', function () {
  this.classList.toggle('active');
  navList.classList.toggle('open');
  document.querySelector('.header__logo').classList.toggle('active-menu');
  document.body.classList.toggle('body--locked');
});

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementsByClassName('section-catalog__carousel')[0];
  carousel.classList.add('section-catalog__carousel--active-mode');
  const cells = carousel.children;
  cells[0].classList.add('carousel-cell--active');

  (async function autoplay () {
    let prevCell;
    for (let i = 0; i < cells.length;) {
      await new Promise((resolve) => {
        setTimeout(resolve, 3000);
      });

      if (prevCell) {
        prevCell.classList.remove('carousel-cell--active');
      }

      cells[i].classList.add('carousel-cell--active');
      prevCell = cells[i];

      if (i === cells.length - 1) {
        cells[i].classList.add('carousel-cell--active');
        i = 0;
        continue;
      }

      i++;
    }
  })();
});

document.getElementsByTagName('a')[0].addEventListener('click', (e) => {
  e.currentTarget.scrollTo({
    top: 1000,
    behavior: 'smooth'
  });
});

function initJS () {
  document.body.classList.replace('no-js', 'js');
}
