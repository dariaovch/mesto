export function renderLoading(isLoading, form, text) {
    const submitButton = form.querySelector('.popup__save-button');

    if(!isLoading) {
        submitButton.textContent = `${text}`;
    } else {
        submitButton.textContent = 'Сохранение...';
    }
}