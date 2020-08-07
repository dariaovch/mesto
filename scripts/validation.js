const objectOfValidation = {
    formElement:'.popup__form',
    inputElement:'.popup__input',
    submitButtonElement:'.popup__save-button',
    inactiveButtonClass:'popup__save-button_disabled',
    inputErrorClass:'popup__input_type_error',
    errorClass:'popup__form-error_visible'
  }

//Show error message

function showInputError(formElement, inputElement, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
  };

//Hide error message

function hideInputError(formElement, inputElement, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };


//Checking if inputs are valid or not
function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputErrorClass, errorClass);
    } else {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };

//EventListeners for 'input' events
function setEventListeners(formElement, inputElement, inputErrorClass, errorClass, submitButtonElement, inactiveButtonClass) {
    const inputList = Array.from(formElement.querySelectorAll(inputElement));
    const submitButton = formElement.querySelector(submitButtonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
        toggleButtonState(inputList, submitButton, inactiveButtonClass);
      });
    });
  };

//Checking form validity and changing button state
function isFormInvalid(inputList) {
   return inputList.some((inputElement) => {
       return !inputElement.validity.valid;
   });
}

function disableButton(submitButton, inactiveButtonClass) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
}

function enableButton(submitButton, inactiveButtonClass) {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
}

function toggleButtonState(inputList, submitButton, inactiveButtonClass) {
    if (isFormInvalid(inputList)) {
           disableButton(submitButton, inactiveButtonClass);
        } else {
           enableButton(submitButton, inactiveButtonClass);
        }
    }

//Enable validation
  function enableValidation({formElement, inputElement, submitButtonElement, inactiveButtonClass, inputErrorClass, errorClass}) {
     const forms = Array.from(document.querySelectorAll(formElement));
     forms.forEach((formElement) => {
       formElement.addEventListener('submit', (evt) => {
         evt.preventDefault(); 
       })
       setEventListeners(formElement, inputElement, inputErrorClass, errorClass, submitButtonElement, inactiveButtonClass);
     })
   }

//Removing error messages
function resetValidation(form, input) {
    const error = form.querySelector(`#${input.id}-error`)
    input.classList.remove('popup__input_type_error');
    error.classList.remove('popup__form-error_visible');
    error.textContent = '';
}

enableValidation(objectOfValidation);