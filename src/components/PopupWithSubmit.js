import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
        constructor(popupSelector, { submitHandler }) {
            super(popupSelector);
            this._submitHandler = submitHandler;
            this._submitButton = this._popup.querySelector('.popup__save-button');
            this._form = this._popup.querySelector('.popup__form');
        }

        renderLoading(isLoading) {
            if(!isLoading) {
                this._submitButton.textContent = 'Да';
            } else {
                this._submitButton.textContent = 'Сохранение...'
            }
        }

        setEventListeners() {
            this._form.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this._submitHandler();
         });
        }
}