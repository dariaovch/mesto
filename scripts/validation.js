function enableValidation(settings) {
    const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
    
    const inputs = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonSubmit = Array.from(formElement.querySelectorAll(submitButtonSelector));

    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', (evt) => {
            evt.preventDefault();

            const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
            if(inputElement.validity.valid) {
                inputElement.classList.remove(inputErrorClass);
                inputElement.classList.add(inputValidClass);
                errorElement.textContent = '';
                errorElement.classList.remove(errorClass);
            } else {
                inputElement.classList.add(inputErrorClass);
                inputElement.classList.remove(inputValidClass);
                errorElement.textContent = inputElement.validationMessage;
                errorElement.classList.add(errorClass);
            }

            const isFormValid = inputs.some((inputElement) => !inputElement.validity.valid);
            if (!isFormValid) {
                buttonSubmit.classList.add(activeButtonClass);
                buttonSubmit.classList.remove(inactiveButtonClass);
                buttonSubmit.disabled = false;
            } else {
                buttonSubmit.classList.remove(activeButtonClass);
                buttonSubmit.classList.add(inactiveButtonClass);
                buttonSubmit.disabled = true;
            }
        });
    });
  });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });