//Popup windows
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
const showCardPopup = document.querySelector('.popup_type_show-card');

//Open buttons
const openEditProfilePopupButton = document.querySelector('.profile__edit-button');
const openAddCardPopupButton = document.querySelector('.profile__add-button');

//Close buttons
const closeEditProfilePopupButton = editProfilePopup.querySelector('.popup__close-button');
const closeAddCardPopupButton = addCardPopup.querySelector('.popup__close-button');
const closeShowCardPopupButton = showCardPopup.querySelector('.popup__close-button');

//Forms and data inputs
const editForm = editProfilePopup.querySelector('.popup__form');
const addCardForm = addCardPopup.querySelector('.popup__form');

const inputName = document.querySelector('.popup__input_name');
const inputOccupation = document.querySelector('.popup__input_occupation');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

const inputPlace = document.querySelector('.popup__input_place');
const inputLink = document.querySelector('.popup__input_link');

//Card template and list
const cardTemplate = document.querySelector('.cards__template').content.querySelector('.cards__item');
const grid = document.querySelector('.cards__grid');

//showImagePopup content
const popupImage = document.querySelector('.popup__image');
const popupHeading = document.querySelector('.popup__image-caption');

//Open&close popup window
function togglePopup(popup) {
    if (!popup.classList.contains('popup_opened')) {
        popup.classList.add('popup_opened');
    } else {
        popup.classList.remove('popup_opened');
    }
}

//Submit data from profile editing popup
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    togglePopup(editProfilePopup);
}

//Submit data from card adding popup
function addCardSubmitHandler(evt) {
    evt.preventDefault();
    renderCard({name: inputPlace.value, link: inputLink.value});
    togglePopup(addCardPopup);
}

//Card creation
function createCard(data) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.cards__image');
    const cardHeading = cardElement.querySelector('.cards__heading');
    const cardLikeButton = cardElement.querySelector('.cards__like-button');
    const cardDeleteButton = cardElement.querySelector('.cards__delete-button');
    
    cardLikeButton.addEventListener('click', (evt) => {
      evt.target.classList.toggle('cards__like-button_active');
    });

    cardDeleteButton.addEventListener('click', (evt) => {
        evt.target.closest('.cards__item').remove();
    });
    
    cardImage.src = data.link;
    cardHeading.textContent = data.name;
    cardImage.alt = data.name;

    cardImage.addEventListener('click', () => {
       togglePopup(showCardPopup);
       popupImage.src = cardImage.src;
       popupHeading.textContent = cardHeading.textContent;
       popupImage.alt = cardImage.alt;
    });

    return cardElement;
}

//Card rendering
function renderCard(data) {
    grid.prepend(createCard(data));
}

//Event listeners for popup open&close buttons
openEditProfilePopupButton.addEventListener('click', () => {
    togglePopup(editProfilePopup);
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
});
openAddCardPopupButton.addEventListener('click', () => {
    togglePopup(addCardPopup);
    inputPlace.value = ('Название');
    inputLink.value = ('Ссылка на картинку');
});

closeEditProfilePopupButton.addEventListener('click', () => {
    togglePopup(editProfilePopup);
});
closeAddCardPopupButton.addEventListener('click', () => {
    togglePopup(addCardPopup);
});
closeShowCardPopupButton.addEventListener('click', () => {
  togglePopup(showCardPopup);
});

//Event listeners for forms submission
editForm.addEventListener('submit', formSubmitHandler);
addCardForm.addEventListener('submit', addCardSubmitHandler);

//Renedering cards from initial array
initialCards.forEach((data) => {
    renderCard(data);
});