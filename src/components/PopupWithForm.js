import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { submitHandler }) {
        super(popupSelector);
        this._submitHandler = submitHandler;
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._popup.querySelector('.popup__save-button');
    }


    _getInputValues() {
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
       
        return this._formValues;

    }
    
    renderLoading(isLoading) {
        if(!isLoading) {
            this._submitButton.textContent = 'Сохранить';
        } else {
            this._submitButton.textContent = 'Сохранение...'
        }
    }

    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._getInputValues());
     });
    }

    close() {
        super.close();
        this._form.reset();
    }
}