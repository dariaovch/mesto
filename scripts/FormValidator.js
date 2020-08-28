export default class FormValidator {
    constructor(settings, formSelector) {
        this._formElement = settings.formElement;
        this._inputElement = settings.inputElement;
        this._submitButtonElement = settings.submitButtonElement;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._formSelector = formSelector;
        this._inputList = Array.from(formSelector.querySelectorAll(this._inputElement));
        this._submitButton = formSelector.querySelector(this._submitButtonElement);
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };
    
    _hideInputError(inputElement) {
        const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
      };

    _isFormInvalid() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
     }
     
    _disableButton() {
         this._submitButton.classList.add(this._inactiveButtonClass);
         this._submitButton.disabled = true;
     }
     
    _enableButton() {
         this._submitButton.classList.remove(this._inactiveButtonClass);
         this._submitButton.disabled = false;
     }
     
    _toggleButtonState() {
        if (this._isFormInvalid()) {
            this._disableButton();
        } else {
            this._enableButton();
        }
    }

    _resetInputState() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
            });
    }

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
          });
        });
    }
    
    enableValidation() {
        this._formSelector.addEventListener('reset', () => {
            this._resetInputState();
        });
        this._setEventListeners();
      }
}
