//Script for all the popups' opening and closing functions

//Open&close popup window
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', escapePopup);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', escapePopup);
}
//Closing popup windows by click on overlay & by escape key
function overlayClickHandler(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        evt.target.classList.remove('popup_opened');
    }
}

function escapePopup(evt) {
    const openedPopup = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(openedPopup);
    }
} 

export { openPopup, closePopup, overlayClickHandler, escapePopup }
