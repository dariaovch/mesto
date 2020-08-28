import { openPopup, closePopup, overlayClickHandler, escapePopup } from './utils.js';
import { initialCards } from './initial-cards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

//Popup windows
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
const showCardPopup = document.querySelector('.popup_type_show-card');
const popups = Array.from(document.querySelectorAll('.popup'));

//Open buttons
const openEditProfilePopupButton = document.querySelector('.profile__edit-button');
const openAddCardPopupButton = document.querySelector('.profile__add-button');

//Close buttons
const closeEditProfilePopupButton = editProfilePopup.querySelector('.popup__close-button');
const closeAddCardPopupButton = addCardPopup.querySelector('.popup__close-button');
const closeShowCardPopupButton = showCardPopup.querySelector('.popup__close-button');

//Submit buttons
const editProfileButton = editProfilePopup.querySelector('.popup__save-button');
const addCardButton = addCardPopup.querySelector('.popup__save-button');

//Forms and data inputs
const editForm = editProfilePopup.querySelector('.popup__form');
const addCardForm = addCardPopup.querySelector('.popup__form');

const inputName = document.querySelector('.popup__input_name');
const inputOccupation = document.querySelector('.popup__input_occupation');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

const inputPlace = document.querySelector('.popup__input_place');
const inputLink = document.querySelector('.popup__input_link');

//Cards list
const grid = document.querySelector('.cards__grid');

//Submit data from profile editing popup
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    closePopup(editProfilePopup);
}

//Submit data from card adding popup
function addCardSubmitHandler(evt) {
    evt.preventDefault();
    renderCardItem({name: inputPlace.value, link: inputLink.value});
    closePopup(addCardPopup);
}

//Event listeners for popup open&close buttons
openEditProfilePopupButton.addEventListener('click', () => {
    openPopup(editProfilePopup);
    editForm.reset();
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
    editProfileButton.disabled = false;
    editProfileButton.classList.remove('popup__save-button_disabled');
});


openAddCardPopupButton.addEventListener('click', () => {
    openPopup(addCardPopup);
    addCardForm.reset();
    inputPlace.value = '';
    inputLink.value = '';
    addCardButton.disabled = true;
    addCardButton.classList.add('popup__save-button_disabled');
});

 

closeEditProfilePopupButton.addEventListener('click', () => {
    closePopup(editProfilePopup);
});
closeAddCardPopupButton.addEventListener('click', () => {
    closePopup(addCardPopup);
});
closeShowCardPopupButton.addEventListener('click', () => {
  closePopup(showCardPopup);
});

popups.forEach((item) => {
    item.addEventListener('mousedown', overlayClickHandler);
})

//Event listeners for forms submission
editForm.addEventListener('submit', formSubmitHandler);
addCardForm.addEventListener('submit', addCardSubmitHandler);


//Rendering cards from initial array
const renderCardItem = (data) => {
    const card = new Card(data, '.cards__template');
    const cardElement = card.createCard();

    grid.prepend(cardElement);
}

initialCards.forEach((data) => {
       renderCardItem(data);
    });


//Default settings for validation
const objectOfValidation = {
    formElement:'.popup__form',
    inputElement:'.popup__input',
    submitButtonElement:'.popup__save-button',
    inactiveButtonClass:'popup__save-button_disabled',
    inputErrorClass:'popup__input_type_error',
    errorClass:'popup__form-error_visible'
  }


//Creating validation objects and enable validation
const editFormValidator = new FormValidator(objectOfValidation, editForm);
editFormValidator.enableValidation();

const addCardValidator = new FormValidator(objectOfValidation, addCardForm);
addCardValidator.enableValidation();