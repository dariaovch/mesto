import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupHeading = this._popup.querySelector('.popup__image-caption');
    }
    
    open(data) {
        super.open();
        
        this._popupImage.src = data.link;
        this._popupHeading.textContent = data.place;
        this._popupImage.alt = data.place;
        super.setEventListeners();
    }
}