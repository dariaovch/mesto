//Script for all the popups' opening and closing functions

const ESC_KEY = 27;

//Open&close popup window
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
        escapePopup(evt, popup);
    });
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => {
        escapePopup(evt, popup);
    });
}
//Closing popup windows by click on overlay & by escape key
function overlayClickHandler(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        evt.target.classList.remove('popup_opened');
    }
}

function escapePopup(evt, popup) {
    if (evt.which === ESC_KEY) {
        closePopup(popup);
    }
} 

export { openPopup, closePopup, overlayClickHandler, escapePopup }
