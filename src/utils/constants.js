//Keys
export const ESC_KEY = 27;

//Profile info elements
export const profileName = document.querySelector('.profile__name');
export const profileOccupation = document.querySelector('.profile__occupation');
export const profileAvatar = document.querySelector(".profile__avatar");
//Open buttons
export const openEditProfilePopupButton = document.querySelector('.profile__edit-button');
export const openAddCardPopupButton = document.querySelector('.profile__add-button');


//Forms and data inputs
export const editForm = document.querySelector('.popup__form_type_edit');
export const addCardForm = document.querySelector('.popup__form_type_add');
export const updateAvatarForm = document.querySelector('.popup__form_type_update');
export const deleteCardForm = document.querySelector('.popup__form_type_delete');

export const inputName = document.querySelector('.popup__input_name');
export const inputOccupation = document.querySelector('.popup__input_occupation');


//Cards list
export const grid = document.querySelector('.cards__grid');

//Default settings for validation
export const objectOfValidation = {
    formElement:'.popup__form',
    inputElement:'.popup__input',
    submitButtonElement:'.popup__save-button',
    inactiveButtonClass:'popup__save-button_disabled',
    inputErrorClass:'popup__input_type_error',
    errorClass:'popup__form-error_visible'
  }

//Options for API requests
export const options = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-15/',
  headers: {
        authorization: '57f413af-09ac-4c6d-a557-b4a54c66383d',
        'Content-Type': 'application/json'
      }
  };