import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);

const content = document.querySelector('.content');


data.forEach(({id, name, autor, date, raiting, janre, url}) => {
  const divEl = document.createElement('div');
  divEl.classList.add('card');

  const imgEl = document.createElement('img');
  imgEl.classList.add('card__top')
  imgEl.src = url;

  const cardDataEl = document.createElement('div');
  cardDataEl.classList.add('card__info');

  const idEl = document.createElement('p');
  idEl.classList.add('card__id');
  idEl.textContent = `id: ${id}`;

  const titleEl = document.createElement('h3');
  titleEl.classList.add('card__title');
  titleEl.textContent = name;

  const writerEl = document.createElement('p');
  writerEl.classList.add('card__writer');
  writerEl.textContent = autor;

  const writeDateEl = document.createElement('p');
  writeDateEl.classList.add('card__date');
  writeDateEl.textContent = date;

  const janrEl = document.createElement('p');
  janrEl.classList.add('card__janre');
  janrEl.textContent = janre;

  const ratingEl = document.createElement('p');
  ratingEl.classList.add('card__raiting');
  ratingEl.textContent = raiting;

  content.appendChild(divEl);
  divEl.appendChild(idEl);
  divEl.appendChild(imgEl);
  divEl.appendChild(cardDataEl);
  cardDataEl.appendChild(titleEl);
  cardDataEl.appendChild(writerEl);
  cardDataEl.appendChild(writeDateEl);
  cardDataEl.appendChild(janrEl);
  divEl.appendChild(ratingEl);
});