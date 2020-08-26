export default class FormValidator {
    constructor(settings, formSelector) {
        this._formElement = settings.formElement;
        this._inputElement = settings.inputElement;
        this._submitButtonElement = settings.submitButtonElement;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._formSelector = formSelector;
    }

    _showInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
    };
    
    _hideInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _checkInputValidity(formElement, inputElement) {
            if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement);
            } else {
            this._hideInputError(formElement, inputElement);
         }
      };

    _isFormInvalid(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
     }
     
    _disableButton(submitButton) {
         submitButton.classList.add(this._inactiveButtonClass);
         submitButton.disabled = true;
     }
     
    _enableButton(submitButton) {
         submitButton.classList.remove(this._inactiveButtonClass);
         submitButton.disabled = false;
     }
     
    _toggleButtonState(inputList, submitButton) {
         if (this._isFormInvalid(inputList)) {
                this._disableButton(submitButton);
             } else {
                this._enableButton(submitButton);
             }
         }

    _setEventListeners() {
        const inputList = Array.from(this._formSelector.querySelectorAll(this._inputElement));
        const submitButton = this._formSelector.querySelector(this._submitButtonElement);
        inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(this._formSelector, inputElement);
            this._toggleButtonState(inputList, submitButton);
          });
        });
      };

    enableValidation() {
        this._formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault(); 
          });
        this._setEventListeners();
      }
}
