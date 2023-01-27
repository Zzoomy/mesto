import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupDescription = this._popupItem.querySelector('.popup__description');
        this._popupImage = this._popupItem.querySelector('.popup__image');
    }

    open(description, image) {
        this._popupDescription.textContent = description;
        this._popupImage.src = image;
        this._popupImage.alt = description;
        super.open();
    }
}

export { PopupWithImage };