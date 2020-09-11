import { ESC_KEY } from '../utils/constants.js';

export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._escapeHandler = this._handleEscapeClose.bind(this);
        this._overlayHandler = this._overlayClickHandler.bind(this);
        this._closeButton = this._popup.querySelector('.popup__close-button');
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close();
        })
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._escapeHandler);
        this._popup.addEventListener('click', this._overlayHandler);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._escapeHandler);
        this._popup.removeEventListener('click', this._overlayHandler);
    }

    _handleEscapeClose(evt) {
        if(evt.which === ESC_KEY) {
            this.close();
        }
    }

    _overlayClickHandler(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }
   
}


