import '../pages/index.css';
import { profileName, profileOccupation, openEditProfilePopupButton, openAddCardPopupButton, editForm, addCardForm, updateAvatarForm, inputName, inputOccupation, grid, objectOfValidation, options } from '../utils/constants.js';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
 
const showCardPopup = new PopupWithImage(".popup_type_show-card");

const api = new Api(options);

api.getAllPageData()
    .then((argument) => {
        const [ userData, cardsData ] = argument;

        profileName.textContent = userData.name;
        profileOccupation.textContent = userData.about;
        const profileInfo = new UserInfo({ nameElement: profileName, occupationElement: profileOccupation });

        const editProfilePopup = new PopupWithForm(".popup_type_edit-profile", {
            submitHandler: (formData) => {
                editProfilePopup.renderLoading(true);
                api.saveEditedInfo(formData)
                    .then((formData) => {
                        profileInfo.setUserInfo(formData);
                        editProfilePopup.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        editProfilePopup.renderLoading(false);
                    });
            },
        });
        openEditProfilePopupButton.addEventListener("click", () => {
            editProfilePopup.open();
            const profileInfoElement = profileInfo.getUserInfo();
            inputName.value = profileInfoElement.name;
            inputOccupation.value = profileInfoElement.about;
        });
        editProfilePopup.setEventListeners();

        const profileAvatar = document.querySelector(".profile__avatar");
        profileAvatar.src = userData.avatar;
        
        const updateAvatarPopup = new PopupWithForm(".popup_type_update-avatar", {
            submitHandler: (formData) => {
                updateAvatarPopup.renderLoading(true);
                api.updateAvatar(formData)
                    .then((data) => {
                        profileAvatar.src = data.avatar;
                        updateAvatarPopup.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        updateAvatarPopup.renderLoading(false);
                    });
            },
        });

        const avatarElement = document.querySelector(".profile__img-container");
        avatarElement.addEventListener("click", () => {
            updateAvatarPopup.open();
        });

        updateAvatarPopup.setEventListeners();

        const cardRenderer = (item, isArray) => {
            const card = new Card(
                {
                    data: item,
                    openPopupHandler: () => {
                        showCardPopup.open(item);
                    },

                    putLikeHandler: () => {
                        api.putLike(item._id)
                            .then((item) => {
                                console.log(item);
                                likeCounter.textContent = item.likes.length;
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    },

                    deleteLikeHandler: () => {
                        api.deleteLike(item._id)
                            .then((item) => {
                                console.log(item);
                                likeCounter.textContent = item.likes.length;
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    },

                    deleteHandler: () => {
                        const deleteCardPopup = new PopupWithSubmit(".popup_type_delete-card", {
                            submitHandler: () => {
                                deleteCardPopup.renderLoading(true);
                                api.deleteCard(item._id)
                                    .then(() => {
                                        cardElement.remove();
                                        deleteCardPopup.close();
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    })
                                    .finally(() => {
                                        deleteCardPopup.renderLoading(false);
                                    });
                            },
                        });
                        deleteCardPopup.open(item);
                        deleteCardPopup.setEventListeners();
                    },
                },
                ".cards__template"
            );

            const cardElement = card.createCard(item.owner._id);
            const likeCounter = cardElement.querySelector(".cards__like-counter");

            const likes = item.likes;
            likeCounter.textContent = likes.length;

            cardGrid.addItem(cardElement, isArray);
        };

        const cardGrid = new Section(
            {
                items: cardsData,
                renderer: (item, isArray) => {
                    cardRenderer(item, isArray);
                },
            },
            grid
        );

        cardGrid.renderItems();

        const addCardPopup = new PopupWithForm(".popup_type_add-card", {
            submitHandler: (item, isArray) => {
                addCardPopup.renderLoading(true);
                api.addNewCard(item)
                    .then((data) => {
                        cardRenderer(data, isArray);
                        addCardPopup.close();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        addCardPopup.renderLoading(false);
                    });
            },
        });

        openAddCardPopupButton.addEventListener("click", () => {
            addCardPopup.open();
        });

        addCardPopup.setEventListeners();
    })
    .catch((err) => {
        console.log(err);
    });

//Creating validation objects and enable validation
const editFormValidator = new FormValidator(objectOfValidation, editForm);
editFormValidator.enableValidation();

const addCardValidator = new FormValidator(objectOfValidation, addCardForm);
addCardValidator.enableValidation();

const updateAvatarValidator = new FormValidator(objectOfValidation, updateAvatarForm);
updateAvatarValidator.enableValidation();