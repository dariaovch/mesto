export default class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    getData(name) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-15/${name}`, {
            headers: this._headers,
        });
    }

    getUserInfo() {
        return this.getData('users/me')
          .then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
          .catch((err) => {
            console.log(err);
        });
    }

    getInitialCards() {
       return this.getData('cards')
          .then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
          .catch((err) => {
            console.log(err);
        });
    }

    getAllPageData() {
        return Promise.all([this.getUserInfo(), this.getInitialCards()]);
    }

    saveEditedInfo(formData) {
        return fetch(`${this._url}users/me`, {
            method: "PATCH",
            headers:  {
                authorization: '57f413af-09ac-4c6d-a557-b4a54c66383d',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                about: formData.about
              })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    addNewCard(item) {
        return fetch(`${this._url}cards`, {
            method: "POST",
            headers:  {
                authorization: '57f413af-09ac-4c6d-a557-b4a54c66383d',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: item.name,
                link: item.link
              })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    putLike(cardId) {
        return fetch(`${this._url}cards/likes/${cardId}`, {
            method: "PUT",
            headers:  {
                authorization: '57f413af-09ac-4c6d-a557-b4a54c66383d',
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    deleteLike(cardId) {
        return fetch(`${this._url}cards/likes/${cardId}`, {
            method: "DELETE",
            headers:  this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    deleteCard(cardId) {
        return fetch(`${this._url}cards/${cardId}`, {
            method: "DELETE",
            headers:  this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    updateAvatar(formData) {
        return fetch(`${this._url}users/me/avatar`, {
            method: "PATCH",
            headers:  {
                authorization: '57f413af-09ac-4c6d-a557-b4a54c66383d',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                avatar: formData.url,
              })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err) => {
            console.log(err);
        });
    }

}