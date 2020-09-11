import { isArray } from "util";

export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item, isArray);
        })
    }

    addItem(element, isArray) {
        if(isArray) {
            this._container.append(element);
        } else {
            this._container.prepend(element);
        }
    }

}