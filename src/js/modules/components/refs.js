export const refs = {
     header: document.querySelector('#header'),
     logo: document.querySelector('.header-logo'),
     homeBtn: document.querySelector('[data-page="home"]'),
     myLibrary: document.querySelector('[data-page="library"]'),
     serchForm: document.querySelector('.header-serch__wrapper'),
     serchInput: document.querySelector('.header-serch__input'),
     mainContainer: document.querySelector('.main-container__cards-wrap'),
     cards: document.querySelectorAll('.cards-list__item'),
     cardsInfo: document.querySelectorAll('.cards-list__info'),
     cardsName: document.querySelectorAll('.cards-list__info-name'),
     cardsDescript: document.querySelectorAll('.card-list__description'),
     genre: document.querySelector('.cards-list__genre'),
     cardsDate: document.querySelectorAll('.cards-list__date'),
     watchedBtn: document.querySelector('[data-tab="watched"]'),
     queueBtn: document.querySelector('[data-tab="queue"]'),
     pagination: document.querySelector('#pagination'),
     aboutDev: document.querySelector('.about-developers__link'),
     teamModalBtnClose: document.querySelector('[data-team-modal-close]'),
     backdrop: document.querySelector('.backdrop'),
}