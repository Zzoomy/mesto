class FormValidator {
  constructor(validationSettings, formElement) {
    this._validationSettings = validationSettings;
    this._formElement = formElement;

    this._submitButton = this._formElement.querySelector(this._validationSettings.submitButtonSelector)
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector));
    }

  _showValidationError(inputItem, errorMessage) {
    const errorItem = this._formElement.querySelector(`.${inputItem.id}-error`)
    inputItem.classList.add(this._validationSettings.inputErrorClass);
    errorItem.textContent = errorMessage;
    errorItem.classList.add(this._validationSettings.errorClass);
  }
  
  _hideValidationError(inputItem) {
    const errorItem = this._formElement.querySelector(`.${inputItem.id}-error`)
    inputItem.classList.remove(this._validationSettings.inputErrorClass);
    errorItem.classList.remove(this._validationSettings.errorClass);
    errorItem.textContent = '';
  }

  resetValidate() {
    this._inputList.forEach((inputItem) => { this._hideValidationError(inputItem); })
    this._toggleButtonState();
  }

  _checkInputValidity(inputItem) {
    if (!inputItem.validity.valid) {
      this._showValidationError(inputItem, inputItem.validationMessage);
    } else {
      this._hideValidationError(inputItem);
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputItem) => {
      inputItem.addEventListener('input', () => {
        this._checkInputValidity(inputItem);
        this._toggleButtonState();
      });
    });
  }

  _hasInvalidInput() {
    return this._inputList.some((inputItem) => {
      return !inputItem.validity.valid;
    });
  }

  enableValidationCheck() {
    this._setEventListeners();
  }

  _disableSubmitButton() {
    this._submitButton.setAttribute('disabled', 'true');
    this._submitButton.classList.add(this._validationSettings.inactiveButtonClass);
  }

  _enableSubmitButton() {
    this._submitButton.classList.remove(this._validationSettings.inactiveButtonClass);
    this._submitButton.removeAttribute('disabled');
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }
}

export { FormValidator };