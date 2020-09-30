# Проект 3: Место

Ссылка: https://dariaovch.github.io/mesto/

## Описание проекта

Проект "Место" - одностраничный лендинг с возможностью изменения пользовательской информации, добавления и изменения карточек с картинками и описанием, выставления "лайков".
Верстка страницы - адаптивная, карточки сверстаны по технологии grid layout. 
На странице применяется javaScript для открытия и закрытия окна редактирования профиля и обработки данных всех форм. Выполнялся в рамках 4-9 спринтов на Яндекс.Практикуме.

## Технологический стек

* HTML
* CSS
* Native JavaScript
* API
* Webpack

## Реализация проекта

* Адптивная верстка по технологиям flexbox и grid-layout. Верстка стабильна на разрешениях от 320 до 1440 пикселей.
* Логика javaScript построена на концепции ES6 модулей, компоненты страницы описаны классами в рамках парадигмы ООП.
* Валидация форм настроена с помощью javaScript.
* Страница подключена к серверу, настроены HTTP-запросы.
* Сборка проекта осуществляется с помощью Webpack.

## Интструкция по развертыванию проекта

* Клонирование репозитория: `git clone https://github.com/dariaovch/mesto.git`
* Установка зависимостей: `npm install`
* Запуск develop-сборки: `npm run dev`
* Запуск production-сборки: `npm run build`
* Выложить проект на сервер:  `npm run deploy`

### Обновления

Спринт 5: на страницу добавлены два модальных окна - добавление карточек и открытие картинки для просмотра. Карточки выовдятся на страницу массивом с помощью js. Добавлена возможность ставить лайк и удалять карточки.

Спринт 6: добавлена валидация форм с помощью javascript. Теперь инпуты форм показывают ошибку, если поле заполнено неверно.

Спринт 7: валидаиця форм и создание карточек на странице вынесены в отдельные классы в соответствии с парадигмой ООП.

Спринт 8: весь проект теперь разбит на отдельные компоненты, за отрисовку контента на странице отвечает класс Section, попапы также вынесены в отдельные классы. Настроена сборка проекта Webpack'ом.

Спринт 9: проект подключен к серверу. Настроены запросы к API и обработка ответов. Пользовательская информация теперь сохраняется на сервере.
