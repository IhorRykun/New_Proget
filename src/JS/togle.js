let elem = document.querySelector('.Problem__contain--svg');
let list = document.querySelector('.problem__list');

elem.addEventListener(`click`, hendeTogle);

function hendeTogle() {
  list.classList.toggle('none');
  console.log('click');
}
