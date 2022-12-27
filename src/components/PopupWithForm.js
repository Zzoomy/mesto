import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, { callbackFormSubmit}) {
        super(popupSelector);
        this._callbackFormSubmit = callbackFormSubmit;
        this._popupFormItem = this._popupItem.querySelector('.popup__form');
        this._inputList = Array.from(this._popupFormItem.querySelectorAll('.popup__input'));
}

_getInputValues() {
    const formValues = {};
    this._inputList.forEach(inputItem => {
      formValues[inputItem.name] = inputItem.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupFormItem.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callbackFormSubmit(this._getInputValues());
    });
  }

  close() {
   super.close();
   this._popupFormItem.reset();
  }
}

export {PopupWithForm};
