import { openPopup } from './utils.js';

//ShowCard popup content
const showCardPopup = document.querySelector('.popup_type_show-card');
const popupImage = showCardPopup.querySelector('.popup__image');
const popupHeading = showCardPopup.querySelector('.popup__image-caption');


export default class Card {
    constructor(data, cardSelector) {
        this._cardImage = data.link;
        this._cardHeading = data.name;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.
        querySelector(this._cardSelector)
        .content
        .querySelector('.cards__item')
        .cloneNode(true);

        cardElement.querySelector('.cards__image').src = this._cardImage;
        cardElement.querySelector('.cards__heading').textContent = this._cardHeading ;

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
            this._openPopupHandler();
        })
    }

    _openPopupHandler() {
        openPopup(showCardPopup);
        popupImage.src = this._cardImage.src;
        popupHeading.textContent = this._getTemplate().querySelector('.cards__heading').textContent;
        popupImage.alt = this._cardImage.alt;
    }

    createCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
    
        return this._element;
      }

}