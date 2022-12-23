import { handleOpenCard } from "./index.js";

class Card {
    constructor(object, templateElem,) {
        this._name = object.name;
        this._image = object.link;
        this._template = templateElem;
        this._elementCard = document.querySelector(this._template).content.querySelector('.cards__item').cloneNode(true);
        this._elementImage = this._elementCard.querySelector('.cards__image');
        this._elementName = this._elementCard.querySelector('.cards__description');
        this._likeIcon = this._elementCard.querySelector('.cards__like');
        this._deleteIcon = this._elementCard.querySelector('.cards__delete');
    }

    _likeCard = (event) => {
        event.target.classList.toggle('cards__like_active');
    }

    _deleteCard() {
        this._elementCard.remove();
    }

    makeCard() {
        this._elementName.textContent = this._name;
        this._elementImage.src = this._image;
        this._elementImage.alt = this._name;
    
        this._addEventHandlers();

        return this._elementCard;
    }

    _addEventHandlers = () => {
        this._likeIcon.addEventListener('click', event => this._likeCard(event));
        this._deleteIcon.addEventListener('click', event => this._deleteCard(event));
        this._elementImage.addEventListener('click', () => handleOpenCard(this._name, this._image));
    }
}

export {Card};