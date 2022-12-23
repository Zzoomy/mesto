import { initialCards, validationSettings } from "./constants.js";
import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";



const profileEditingIcon = document.querySelector('.profile__editor');

const popupProfile = document.querySelector('#profile-popup');

const formProfile = popupProfile.querySelector('.popup__form');

const profileName = document.querySelector('.profile__name');

const profileDescription = document.querySelector('.profile__description');

const nameInput = popupProfile.querySelector('#username-input');

const descriptionInput = popupProfile.querySelector('#description-input');

const iconAddCard = document.querySelector('.profile__add-mesto');

const popupCard = document.querySelector('#cards-popup');

const formCard = popupCard.querySelector('.popup__form');

const popupImageZoom = document.querySelector('#image-popup');

const popupImageZoomDescription = popupImageZoom.querySelector('.popup__description');

const popupImageZoomImage = popupImageZoom.querySelector('.popup__image');

const nameCardInput = popupCard.querySelector('#place-name-input');

const linkCardInput = popupCard.querySelector('#place-image-input');

const cardsArea = document.querySelector('.cards');

const popupElements = document.querySelectorAll('.popup');

const openPopup = function (popupName) {
    popupName.classList.add('popup__opened');
    document.addEventListener('keydown', closePopupThroughEsc);
}

const openPopupProfile = function () {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    openPopup(popupProfile);
}

export const handleOpenCard = function (name, image) {
    popupImageZoomDescription.textContent = name;
    popupImageZoomImage.src = image;
    popupImageZoomImage.alt = name;
    openPopup(popupImageZoom);
}

const closePopup = function (popupName) {
    popupName.classList.remove('popup__opened');
    document.removeEventListener('keydown', closePopupThroughEsc);
}

const closePopupThroughEsc = function (evt) {
    if (evt.key === "Escape") {
        const popupOpened = document.querySelector('.popup__opened');
        closePopup(popupOpened);
    }
}

const renderCard = function (object, template) {
    const card = new Card(object, template);
    return card.makeCard();
}

const addNewCard = function (evt) {
    evt.preventDefault();
    cardsArea.prepend(renderCard({
        name: nameCardInput.value,
        link: linkCardInput.value
    }, '#card-template'));
    evt.target.reset();
    closePopup(popupCard);
    addCardValidate.disableSubmitButton();
}

const renderInitialCards = function () {
    initialCards.forEach(function (card) {
        cardsArea.append(renderCard(card, '#card-template'));
    });
}

renderInitialCards();

const handleProfileFormSubmit = function (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closePopup(popupProfile);
}

const addCardValidate = new FormValidator(validationSettings, popupCard);
addCardValidate.enableValidationCheck();

const editProfileValidate = new FormValidator(validationSettings, formProfile);
editProfileValidate.enableValidationCheck();

profileEditingIcon.addEventListener('click', openPopupProfile);

iconAddCard.addEventListener('click', () => openPopup(popupCard));

popupElements.forEach(popupElement => {
    popupElement.addEventListener('mousedown', (evt) => {
       if (evt.target.classList.contains('popup__opened') || evt.target.classList.contains('popup__close')) {
        closePopup(popupElement);
       }   
    });
});

formProfile.addEventListener('submit', handleProfileFormSubmit);

formCard.addEventListener('submit', addNewCard);