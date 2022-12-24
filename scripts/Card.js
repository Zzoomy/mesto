import { handleOpenCard } from "./index.js";
// Что то у меня не получается передать ее в конструктор, не понимаю почему не работает
class Card {
    constructor(object, templateElem,) {
        this._name = object.name;
        this._image = object.link;
        this._template = templateElem;
    }

    _createCard() {
        return document.querySelector(this._template).content.querySelector('.cards__item').cloneNode(true);
    }

    _likeCard = (event) => {
        event.target.classList.toggle('cards__like_active');
    }

    _deleteCard() {
        this._cardElement.remove();
    }

    makeCard() {
        this._cardElement = this._createCard();
        this._elementImage = this._cardElement.querySelector('.cards__image');
        this._elementName = this._cardElement.querySelector('.cards__description');
        this._likeIcon = this._cardElement.querySelector('.cards__like');
        this._deleteIcon = this._cardElement.querySelector('.cards__delete');
        this._elementName.textContent = this._name;
        this._elementImage.src = this._image;
        this._elementImage.alt = this._name;
    
        this._addEventHandlers();

        return this._cardElement;
    }

    _addEventHandlers = () => {
        this._likeIcon.addEventListener('click', event => this._likeCard(event));
        this._deleteIcon.addEventListener('click', event => this._deleteCard(event));
        this._elementImage.addEventListener('click', () => handleOpenCard(this._name, this._image));
    }
}

export {Card};