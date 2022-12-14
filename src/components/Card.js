class Card {
    constructor(dataObject, templateElem, handleCardClick) {
        this._name = dataObject.name;
        this._image = dataObject.link;
        this._template = templateElem;
        this._handleCardClick = handleCardClick;
    }

    _createCard() {
        return document.querySelector(this._template).content.querySelector('.cards__item').cloneNode(true);
    }

    _likeCard = (event) => {
        event.target.classList.toggle('cards__like_active');
    }

    _deleteCard() {
        this._cardElement.remove();
        this._cardElement = null;
    }

    makeCard() {
        this._cardElement = this._createCard();
        this._elementImages = this._cardElement.querySelector('.cards__image');
        this._elementName = this._cardElement.querySelector('.cards__description');
        this._likeIcon = this._cardElement.querySelector('.cards__like');
        this._deleteIcon = this._cardElement.querySelector('.cards__delete');
        this._elementName.textContent = this._name;
        this._elementImages.src = this._image;
        this._elementImages.alt = this._name;
    
        this._addEventHandlers();

        return this._cardElement;
    }

    _addEventHandlers = () => {
        this._likeIcon.addEventListener('click', event => this._likeCard(event));
        this._deleteIcon.addEventListener('click', event => this._deleteCard(event));
        this._elementImages.addEventListener('click', () => this._handleCardClick(this._name, this._image));
    }
}

export {Card};