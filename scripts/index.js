const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');
const form = document.querySelector('.popup__container');
const submitPopupButton = document.querySelector('.popup__save-button');
const inputName = document.querySelector('.popup__name');
const inputOccupation = document.querySelector('.popup__occupation');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

function togglePopup() {
    popup.classList.toggle('popup_opened')
}

openPopupButton.addEventListener('click', togglePopup);

closePopupButton.addEventListener('click', togglePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    submitPopupButton.addEventListener('click', togglePopup);
}

form.addEventListener('click', formSubmitHandler);
