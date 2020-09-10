import '../pages/index.css';
import { profileName, profileOccupation, openEditProfilePopupButton, openAddCardPopupButton, editForm, addCardForm, inputName, inputOccupation, grid, objectOfValidation } from '../components/constants.js';
import { initialCards } from '../components/initial-cards.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js';

//Creating instances for popup windows
const profileInfo = new UserInfo({ nameElement: profileName, occupationElement: profileOccupation });

const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', { submitHandler: (formData) => {
    profileInfo.setUserInfo(formData);
    editProfilePopup.close();
}});

const addCardPopup = new PopupWithForm('.popup_type_add-card', { submitHandler: (item) => {
    cardRenderer(item);
    addCardPopup.close();
}
});

const showCardPopup = new PopupWithImage('.popup_type_show-card');

//Event listeners for popups
openEditProfilePopupButton.addEventListener('click', () => {
    editProfilePopup.open();
    const profileInfoElement = profileInfo.getUserInfo();
    inputName.value = profileInfoElement.name;
    inputOccupation.value = profileInfoElement.occupation;
    editForm.querySelector('.popup__save-button').classList.remove('popup__save-button_disabled');
    editForm.querySelector('.popup__save-button').disabled = false;
});

editProfilePopup.setEventListeners();

openAddCardPopupButton.addEventListener('click', () => {
    addCardPopup.open();
    addCardForm.querySelector('.popup__save-button').classList.add('popup__save-button_disabled');
    addCardForm.querySelector('.popup__save-button').disabled = true;
});

addCardPopup.setEventListeners();


//Submit handler for rendering cards on page
const cardRenderer = (item) => {
    const card = new Card({ data: item, openPopupHandler: () => {
        showCardPopup.open(item);
    }
}, '.cards__template');
    const cardElement = card.createCard();
    cardGrid.addItem(cardElement);
}

//Creating cards grid
const cardGrid = new Section({ items: initialCards, renderer: (item) => {
        cardRenderer(item);
}
}, grid);


cardGrid.renderItems();



//Creating validation objects and enable validation
const editFormValidator = new FormValidator(objectOfValidation, editForm);
editFormValidator.enableValidation();

const addCardValidator = new FormValidator(objectOfValidation, addCardForm);
addCardValidator.enableValidation();