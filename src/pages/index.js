import '../pages/index.css';
import { profileName, profileOccupation, openEditProfilePopupButton, openAddCardPopupButton, editForm, addCardForm, inputName, inputOccupation, grid, objectOfValidation } from '../utils/constants.js';
import { initialCards } from '../utils/initial-cards.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';

//Creating instances for popup windows
const profileInfo = new UserInfo({ nameElement: profileName, occupationElement: profileOccupation });

const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', { submitHandler: (formData) => {
    profileInfo.setUserInfo(formData);
    editProfilePopup.close();
}});

const addCardPopup = new PopupWithForm('.popup_type_add-card', { submitHandler: (item, isArray) => {
    cardRenderer(item, isArray);
    addCardPopup.close();
}
});

const updateAvatarPopup = new PopupWithForm('.popup_type_update-avatar', { submitHandler: () => {

}});

const showCardPopup = new PopupWithImage('.popup_type_show-card');

//Event listeners for popups
openEditProfilePopupButton.addEventListener('click', () => {
    editProfilePopup.open();
    const profileInfoElement = profileInfo.getUserInfo();
    inputName.value = profileInfoElement.name;
    inputOccupation.value = profileInfoElement.occupation;
});

editProfilePopup.setEventListeners();

openAddCardPopupButton.addEventListener('click', () => {
    addCardPopup.open();
});

addCardPopup.setEventListeners();

const avatarElement = document.querySelector('.profile__img-container');
avatarElement.addEventListener('click', () => {
    updateAvatarPopup.open();
})

updateAvatarPopup.setEventListeners();


//Submit handler for rendering cards on page
const cardRenderer = (item, isArray) => {
    const card = new Card({ data: item, openPopupHandler: () => {
        showCardPopup.open(item);
    }
}, '.cards__template');
    const cardElement = card.createCard();
    cardGrid.addItem(cardElement, isArray);
}

//Creating cards grid
const cardGrid = new Section({ items: initialCards, renderer: (item, isArray) => {
        cardRenderer(item, isArray);
}
}, grid);


cardGrid.renderItems();


export const deleteCardPopup = new PopupWithSubmit('.popup_type_delete-card', { submitHandler: () => {

} 
});

const updateAvatarForm = document.querySelector('.popup__form_type_update');

//Creating validation objects and enable validation
const editFormValidator = new FormValidator(objectOfValidation, editForm);
editFormValidator.enableValidation();


const addCardValidator = new FormValidator(objectOfValidation, addCardForm);
addCardValidator.enableValidation();

const updateAvatarValidator = new FormValidator(objectOfValidation, updateAvatarForm)
updateAvatarValidator.enableValidation();