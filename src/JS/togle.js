let elem = document.querySelector('.Problem__contain--svg');
let list = document.querySelector('.problem__list');

elem.addEventListener(`click`, hendeTogle);

function hendeTogle() {
  list.classList.toggle('.display ');
  console.log('click');
}
