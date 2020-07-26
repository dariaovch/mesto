//Popup windows
const popup = document.querySelector('.popup');
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

let inputName = document.querySelector('.popup__input_name');
let inputOccupation = document.querySelector('.popup__input_occupation');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');

let inputPlace = document.querySelector('.popup__input_place');
let inputLink = document.querySelector('.popup__input_link');

//Card template and list
const cardTemplate = document.querySelector('.cards__template').content.querySelector('.cards__item');
const grid = document.querySelector('.cards__grid');

//showImagePopup content
let popupImage = document.querySelector('.popup__image');
let popupHeading = document.querySelector('.popup__image-caption');

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
    const cardLikeButton = cardElement.querySelector('.cards__like-button')
    const cardDeleteButton = cardElement.querySelector('.cards__delete-button');
    
    cardLikeButton.addEventListener('click', (evt) => {
      evt.target.classList.toggle('cards__like-button_active');
    });

    cardDeleteButton.addEventListener('click', (evt) => {
        evt.target.closest('.cards__item').remove();
    })
    
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
    inputLink.value = ('Сссылка на картинку');
});

closeEditProfilePopupButton.addEventListener('click', () => {
    togglePopup(editProfilePopup)
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


//Cards grid array
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

initialCards.forEach((data) => {
    renderCard(data);
});