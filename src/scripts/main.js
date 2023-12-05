'use strict';

const form = document.querySelector('[name="contact-form"]');

window.addEventListener('hashchange', () => {
  const vw = window.innerWidth;

  if (
    (window.location.hash === '#menu'
      || window.location.hash === '#all-products')
    && vw < 1440
  ) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
