const popup = document.querySelector(".popup");
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
const showCardPopup = document.querySelector('.popup_type_show-card');

const openEditProfilePopupButton = document.querySelector(".profile__edit-button");
const openAddCardPopupButton = document.querySelector('.profile__add-button');
// const openShowCardPopup = document.querySelector('.cards__image');

const closeEditProfilePopupButton = editProfilePopup.querySelector(".popup__close-button");
const closeAddCardPopupButton = addCardPopup.querySelector(".popup__close-button");
const closeShowCardPopupButton = showCardPopup.querySelector('.popup__close-button');

const editForm = editProfilePopup.querySelector(".popup__container");
const addCardForm = addCardPopup.querySelector(".popup__container");


const submitPopupButton = document.querySelector(".popup__save-button");


let inputName = document.querySelector(".popup__input_name");
let inputOccupation = document.querySelector(".popup__input_occupation");
let profileName = document.querySelector(".profile__name");
let profileOccupation = document.querySelector(".profile__occupation");

const inputPlace = document.querySelector('.popup__input_place');
const inputLink = document.querySelector('.popup__input_link');

function togglePopup(popup) {
    if (!popup.classList.contains("popup_opened")) {
        inputName.value = profileName.textContent;
        inputOccupation.value = profileOccupation.textContent;
        popup.classList.add("popup_opened");
    } else {
        popup.classList.remove("popup_opened");
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    togglePopup(editProfilePopup);
}

function addCardSubmitHandler(evt) {
    evt.preventDefault();
    
    grid.prepend(createCard(inputPlace.value, inputLink.value));

    togglePopup(addCardPopup);
}

openEditProfilePopupButton.addEventListener("click", () => {
    togglePopup(editProfilePopup);
});
openAddCardPopupButton.addEventListener("click", () => {
    togglePopup(addCardPopup);
});

closeEditProfilePopupButton.addEventListener("click", () => {
    togglePopup(editProfilePopup)
});
closeAddCardPopupButton.addEventListener("click", () => {
    togglePopup(addCardPopup);
});

closeShowCardPopupButton.addEventListener("click", () => {
   togglePopup(showCardPopup);
});

editForm.addEventListener("submit", formSubmitHandler);
addCardForm.addEventListener('submit', addCardSubmitHandler);

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

const cardTemplate = document.querySelector('.cards__template').content.querySelector('.cards__item');
const grid = document.querySelector('.cards__grid');


function createCard(data) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.cards__image');
    const cardHeading = cardElement.querySelector('.cards__heading');
    const cardLikeButton = cardElement.querySelector('.cards__like-button')
    const cardDeleteButton = cardElement.querySelector('.cards__delete-button');
    
    cardLikeButton.addEventListener('click', function(evt) {
      evt.target.classList.toggle('cards__like-button_active');
    });

    cardDeleteButton.addEventListener('click', function(evt) {
        evt.target.closest('.cards__item').remove();
    })
    
    cardImage.src = data.link;
    cardHeading.textContent = data.name;

    let popupImage = document.querySelector('.popup__image');
    let popupHeading = document.querySelector('.popup__image-caption');
    cardImage.addEventListener('click', () => {
        togglePopup(showCardPopup);
        popupImage.src = cardImage.src;
        popupHeading.textContent = cardHeading.textContent;
    });
    closeShowCardPopupButton.addEventListener("click", () => {
        togglePopup(showCardPopup);
    });


    return cardElement;
}

function renderCard(data) {
    grid.append(createCard(data));
}

initialCards.forEach((data) => {
    renderCard(data);
});

// let popupImage = document.querySelector('.popup__image');
// let popupHeading = document.querySelector('.popup__image-caption');

// openShowCardPopup.addEventListener('click', (evt) => {
   // evt.target.togglePopup(showCardPopup);
   // popupImage.src = cardImage.src;
   // popupHeading.textContent = cardHeading.textContent;
// });
