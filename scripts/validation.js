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

function isFormInvalid(inputList) {
   return inputList.some((inputElement) => {
       return !inputElement.validity.valid;
   });
}
    
function toggleButtonState(inputList, submitButton, inactiveButtonClass) {
    if (isFormInvalid(inputList)) {
            submitButton.classList.add(inactiveButtonClass);
            submitButton.disabled = true;
        } else {
            submitButton.classList.remove(inactiveButtonClass);
            submitButton.disabled = false;
        }
    }

  function enableValidation({formElement, inputElement, submitButtonElement, inactiveButtonClass, inputErrorClass, errorClass}) {
     const forms = Array.from(document.querySelectorAll(formElement));
     forms.forEach((formElement) => {
       formElement.addEventListener('submit', (evt) => {
         evt.preventDefault(); 
       })
       setEventListeners(formElement, inputElement, inputErrorClass, errorClass, submitButtonElement, inactiveButtonClass);
     })
   }




// const enableValidation = ({formElement, inputElement, submitButtonElement, inactiveButtonClass, inputErrorClass, errorClass}) => {
//     const formsList = Array.from(document.querySelectorAll(formElement));
//     formsList.forEach((formElement) => {
//         formElement.addEventListener('submit', (evt) => {
//             evt.preventDefault();
//         });

//         const inputsList = Array.from(formElement.querySelectorAll(inputElement));
//         const submitButton = formElement.querySelector(submitButtonElement);

//         inputsList.forEach((inputElement) => {
//             inputElement.addEventListener('input', (evt) => {

//                 const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

//                 if(inputElement.validity.valid) {
//                     inputElement.classList.remove(inputErrorClass);
//                     errorElement.textContent = '';
//                     errorElement.classList.remove(errorClass); 
//                 } else {
//                     inputElement.classList.add(inputErrorClass);
//                     errorElement.textContent = inputElement.validationMessage;
//                     errorElement.classList.add(errorClass);
//                 }
//                 console.log(inputElement.validity);
//             })
//         })

//         const isFormValid = inputsList.some((inputElement) => !inputElement.validity.valid);
//         if (isFormValid) {
//             submitButton.classList.remove(inactiveButtonClass);
//             submitButton.disabled = false;
//         } else {
//             submitButton.classList.add(inactiveButtonClass);
//             submitButton.disabled = true;
//         }
//     })
   
// }

const objectOfValidation = {
    formElement:'.popup__form',
    inputElement:'.popup__input',
    submitButtonElement:'.popup__save-button',
    inactiveButtonClass:'popup__save-button_disabled',
    inputErrorClass:'popup__input_type_error',
    errorClass:'popup__form-error_visible'
  }

enableValidation({
    formElement:'.popup__form',
    inputElement:'.popup__input',
    submitButtonElement:'.popup__save-button',
    inactiveButtonClass:'popup__save-button_disabled',
    inputErrorClass:'popup__input_type_error',
    errorClass:'popup__form-error_visible'
  });
