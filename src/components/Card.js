export default class Card {
    constructor({ data, openPopupHandler }, cardSelector) {
        this._cardImage = data.link;
        this._cardHeading = data.place;
        this._openPopupHandler = openPopupHandler;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._cardSelector);
        const cardElement = cardTemplate.content.querySelector('.cards__item').cloneNode(true);

        return cardElement;
    }

    _likeCardHandler() {
        this._cardLikeButton.classList.toggle('cards__like-button_active');
    }

    _deleteCardHandler() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._cardLikeButton = this._element.querySelector('.cards__like-button');
        this._cardDeleteButton = this._element.querySelector('.cards__delete-button');
        this._cardImage = this._element.querySelector('.cards__image');

        this._cardLikeButton.addEventListener('click', () => {
            this._likeCardHandler();
        });

        this._cardDeleteButton.addEventListener('click', () => {
            this._deleteCardHandler();
        });

        this._cardImage.addEventListener('click', () => {
            this._openPopupHandler(this._cardHeading, this._cardImage);
        })
    }

    createCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.cards__image').src = this._cardImage;
        this._element.querySelector('.cards__heading').textContent = this._cardHeading;
        this._setEventListeners();
    
        return this._element;
      }

}