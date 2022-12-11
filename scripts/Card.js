import { openPopup, popupImageZoom as popupZoom, popupImageZoomDescription as popupDescription, popupImageZoomImage as popupImage } from "./index.js";

class Card {
    constructor(object, templateElem) {
        this._name = object.name;
        this._image = object.link;
        this._template = templateElem;
        this._elementCard = document.querySelector(this._template).content.querySelector('.cards__item').cloneNode(true);
        this._elementImages = this._elementCard.querySelector('.cards__image');
        this._elementName = this._elementCard.querySelector('.cards__description');
        this._likeIcon = this._elementCard.querySelector('.cards__like');
        this._deleteIcon = this._elementCard.querySelector('.cards__delete');
    }

    _addLikeCard = (event) => {
        event.target.classList.toggle('cards__like_active');
    }

    _deleteCard() {
        this._elementCard.remove();
    }

    _getZoomImages() {
        popupDescription.textContent = this._name;
        popupImage.src = this._image;
        popupImage.alt = this._name;
        openPopup(popupZoom);
    }

    makeCard() {
        this._elementName.textContent = this._name;
        this._elementImages.src = this._image;
        this._elementImages.alt = this._name;
    
        this._addEventHandler();

        return this._elementCard;
    }

    _addEventHandler = () => {
        this._likeIcon.addEventListener('click', event => this._addLikeCard(event));
        this._deleteIcon.addEventListener('click', event => this._deleteCard(event));
        this._elementImages.addEventListener('click', () => this._getZoomImages());
    }
}

export {Card};