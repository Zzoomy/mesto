import { initialCards, validationSettings } from "../components/utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import './index.css';
import {
    profileEditingIcon, iconAddCard,
    formCards, formProfile,
    nameInput, descriptionInput
  } from '../components/utils/elements.js';
 
const popupImageZoom = new PopupWithImage('#image-popup');
popupImageZoom.setEventListeners();

const userInfo = new UserInfo({ 
    usernameSelector: '.profile__name',
    userDescriptionSelector: '.profile__description'
});

const popupEditeProfile = new PopupWithForm('#profile-popup', {
    callbackFormSubmit: (profileData) => {
      userInfo.setUserInfo({
        username: profileData.username,
        description: profileData.description
      });
      popupEditeProfile.close();
    }
});
popupEditeProfile.setEventListeners();

const handleCardClick = function (name, image) {
    popupImageZoom.open(name, image);
}

const renderCard = function (cardData) {
    const renderCardItem = new Card(cardData, '#card-template', handleCardClick);
    return renderCardItem.makeCard();
}

const renderInitialCards = new Section({
    items: initialCards,
    renderer: (cardData) => {
       renderInitialCards.addItem(renderCard(cardData));
    }
}, '.cards'); 
renderInitialCards.renderItems();

const popupAddCard = new PopupWithForm('#cards-popup', {
    callbackFormSubmit: (formValues) => {
        renderInitialCards.addItem(renderCard({
            name: formValues.placename,
            link: formValues.placeimage
        }));
        popupAddCard.close();
    }
}); 
popupAddCard.setEventListeners();

const addCardValidate = new FormValidator(validationSettings, formCards);
addCardValidate.enableValidationCheck();

const editProfileValidate = new FormValidator(validationSettings, formProfile);
editProfileValidate.enableValidationCheck();

profileEditingIcon.addEventListener('click', function  () {
    popupEditeProfile.open();
    const actualUserInfo = userInfo.getUserInfo();
    nameInput.setAttribute('value', actualUserInfo.username);
    descriptionInput.setAttribute('valeu', actualUserInfo.description);
});

iconAddCard.addEventListener('click', function () {
    popupAddCard.open();
    addCardValidate.disableSubmitButton();
});
