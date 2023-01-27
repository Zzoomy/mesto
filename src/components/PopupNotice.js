import { Popup } from "./Popup.js";

class PopupNotice extends Popup {
    constructor(popupSelector, { callbackNotice }) {
        super(popupSelector);
        this._submitButton = this._popupItem.querySelector('.popup__form');
        this._callbackNotice = callbackNotice;
    }

    open(cardObject, cardId) {
        this._cardObject = cardObject;
        this._cardId = cardId;
        super.open();
    }
    
    setEventListeners() {
        this._submitButton.addEventListener('submit', (evt) => { evt.preventDefault(); this._callbackNotice(this._cardObject, this._cardId) })
        super.setEventListeners();
    }
}

export { PopupNotice };