let editProfileIcon = document.querySelector('.profile__editor');

let popupProfile = document.querySelector('#profile-popup');

let profileName = document.querySelector('.profile__name');

let profileDescription = document.querySelector('.profile__description');

let nameInput = document.querySelector('.popup__input_item_name');

let descriptionInput = document.querySelector('.popup__input_item_description');

let closeButtons = document.querySelector('.popup__close');

let openPopup = function (popupName) {
    popupName.classList.add('popup__opened');
}

let openPopupProfile = function () {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    openPopup(popupProfile);
}

let handleProfileFormSubmit = function (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closePopup(popupProfile);
}

let closePopup = function (popupName) {
    popupName.classList.remove('popup__opened');
}

let closePopupProfile = function () {
    closePopup(popupProfile);
}

editProfileIcon.addEventListener('click', openPopupProfile);
 
popupProfile.addEventListener('submit', handleProfileFormSubmit);

closeButtons.addEventListener('click', closePopupProfile);