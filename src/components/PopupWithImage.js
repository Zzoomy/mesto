import { Popup } from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupDescription = document.querySelector('.popup__description');
        this._popupImage = document.querySelector('.popup__image');
    }

    open(description, image) {
        this._popupDescription.textContent = description;
        this._popupImage.src = image;
        this._popupImage.alt = description;
        super.open();
    }
}

export {PopupWithImage};