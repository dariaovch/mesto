const openPopupButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closePopupButton = document.querySelector(".popup__close-button");
const form = document.querySelector(".popup__container");
const submitPopupButton = document.querySelector(".popup__save-button");
let inputName = document.querySelector(".popup__input_name");
let inputOccupation = document.querySelector(".popup__input_occupation");
let profileName = document.querySelector(".profile__name");
let profileOccupation = document.querySelector(".profile__occupation");

function togglePopup() {
    if (popup.classList.contains("popup_opened") === false) {
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
    togglePopup();
}

openPopupButton.addEventListener("click", togglePopup);
closePopupButton.addEventListener("click", togglePopup);
form.addEventListener("submit", formSubmitHandler);
