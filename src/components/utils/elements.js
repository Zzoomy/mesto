const profileEditingIcon = document.querySelector('.profile__editor');
const iconAddCard = document.querySelector('.profile__add-mesto');
const popupProfile = document.querySelector('#profile-popup');
const formProfile = popupProfile.querySelector('.popup__form');
const popupCards = document.querySelector('#cards-popup');
const formCards = popupCards.querySelector('.popup__form');
const nameInput = popupProfile.querySelector('#username-input');
const descriptionInput = popupProfile.querySelector('#description-input');
const popupAvatarEdit = document.querySelector('#avatar-popup');
const popupAvatarEditForm = popupAvatarEdit.querySelector('.popup__form');
const iconAvatarEdit = document.querySelector('.profile__avatar-edit');

export {
  profileEditingIcon, iconAddCard,
  popupProfile, popupCards,
  formProfile, nameInput,
  descriptionInput, formCards,
  popupAvatarEditForm, iconAvatarEdit
};