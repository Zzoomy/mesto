const validationSettings = {
   formSelector: '.popup__form',
   inputSelector: '.popup__input',
   submitButtonSelector: '.popup__submit',
   inactiveButtonClass: 'popup__submit_disabled',
   inputErrorClass: 'popup__input_type_error',
   errorClass: 'popup__input_type_visible',
}

const showValidationError = function (formItem, inputItem, errorMessage, settings) {
    const errorItem = formItem.querySelector(`.${inputItem.id}-error`);
    inputItem.classList.add(settings.inputErrorClass);
    errorItem.textContent = errorMessage;
    errorItem.classList.add(settings.errorClass);
}

const hideValidationError = function (formItem, inputItem, settings) {
    const errorItem = formItem.querySelector(`.${inputItem.id}-error`);
    inputItem.classList.remove(settings.inputErrorClass);
    errorItem.classList.remove(settings.errorClass);
    errorItem.textContent = '';
}

const toggleInputErrorState = function (formItem, inputItem, settings) {
    if (!inputItem.validity.valid) {
      showValidationError(formItem, inputItem, inputItem.validationMessage, settings);  
    } else {
      hideValidationError(formItem, inputItem, settings);
    }
}

const setEventListeners = function (formItem, settings) {
    const inputList = Array.from(formItem.querySelectorAll(settings.inputSelector));
    const buttonItem = formItem.querySelector(settings.submitButtonSelector);
    toggleButtonState(formItem, buttonItem, settings);
    inputList.forEach((inputItem) => {
        inputItem.addEventListener('input', function () {
            toggleInputErrorState(formItem, inputItem, settings);
            toggleButtonState(formItem, buttonItem, settings);
        });
    });
}

const hasInvalidInput = function (inputList) {
    return inputList.some((item) => {
        return !item.validity.valid;
    });
}

const enableValidationCheck = function (settings) {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach(function (formItem) {
    formItem.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formItem) => {
        setEventListeners(formItem, settings);
    });
});
}

const toggleButtonState = function (formItem, buttonItem, settings) {
    const inputList = Array.from(formItem.querySelectorAll(settings.inputSelector));
    if (hasInvalidInput(inputList)) {
      buttonItem.classList.add(settings.inactiveButtonClass);
    } else {
      buttonItem.classList.remove(settings.inactiveButtonClass);
    }
  }

enableValidationCheck(validationSettings);