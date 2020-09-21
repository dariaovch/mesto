export default class Card {
    constructor({ data, openPopupHandler, putLikeHandler, deleteLikeHandler, deleteHandler }, cardSelector, userId) {
        this._cardImage = data.link;
        this._cardHeading = data.name;
        this._openPopupHandler = openPopupHandler;
        this._putLikeHandler = putLikeHandler;
        this._deleteLikeHandler = deleteLikeHandler;
        this._deleteHandler = deleteHandler
        this._cardSelector = cardSelector;
        this._isOwner = (data.owner._id === userId);
        this._likes = data.likes;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._cardSelector);
        const cardElement = cardTemplate.content.querySelector('.cards__item').cloneNode(true);

        return cardElement;
    }

    _countLikes() {
        this._likeCounter = this._element.querySelector('.cards__like-counter');
        this._likeCounter.textContent = this._likes.length;
    }
    

    _putLikeHandler() {
        this._putLikeHandler();
    }

    _deleteLikeHandler() {
        this._deleteLikeHandler();
    }

    _likeHandler(evt) {
        if(evt.target.classList.contains('cards__like-button_active')) {
            this._deleteLikeHandler();
            evt.target.classList.remove('cards__like-button_active');
        } else {
            this._putLikeHandler();
            evt.target.classList.add('cards__like-button_active');
        }
    }

    remove() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._cardLikeButton = this._element.querySelector('.cards__like-button');
        this._cardDeleteButton = this._element.querySelector('.cards__delete-button');
        if(this._isOwner) {
            this._cardDeleteButton.classList.add('cards__delete-button_visible');
        } else {
            this._cardDeleteButton.classList.remove('.cards__delete-button_visible');
        }

        this._cardImage = this._element.querySelector('.cards__image');

        this._cardLikeButton.addEventListener('click', (evt) => {
            this._likeHandler(evt);
        });

        this._cardDeleteButton.addEventListener('click', () => {
            this._deleteHandler();
        });

        this._cardImage.addEventListener('click', () => {
            this._openPopupHandler(this._cardHeading, this._cardImage);
        })
    }

    createCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.cards__image').src = this._cardImage;
        this._element.querySelector('.cards__heading').textContent = this._cardHeading;
        this._countLikes();

        this._setEventListeners();
    
        return this._element;
      }

}