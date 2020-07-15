const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');
const form = document.querySelector('.popup__container');
const submitPopupButton = document.querySelector('.popup__save-button');
let inputName = document.querySelector('.popup__name');
let inputOccupation = document.querySelector('.popup__occupation');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');

function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    submitPopupButton.addEventListener('click', closePopup);
}

function noSavePopup() {
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
    closePopup();
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', noSavePopup);
form.addEventListener('click', formSubmitHandler);
