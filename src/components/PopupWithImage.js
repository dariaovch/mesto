import Popup from './Popup.js';

export default class PopupWithImage extends Popup {

    open(data) {
        super.open();
        
        const popupImage = this._popup.querySelector('.popup__image');
        const popupHeading = this._popup.querySelector('.popup__image-caption');
        popupImage.src = data.link;
        popupHeading.textContent = data.place;
        popupImage.alt = data.place;
        super.setEventListeners();
    }
}