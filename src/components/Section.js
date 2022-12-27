class Section {
    constructor({ items, renderer }, templateSelector) {
        this._initialItems = items;
        this._renderer = renderer;
        this._templateContainer = document.querySelector(templateSelector);
    }

    renderItems() {
        this._initialItems.forEach(this._renderer);
    }

    addItem(cardElement) {
        this._templateContainer.prepend(cardElement);
    }
}

export {Section};