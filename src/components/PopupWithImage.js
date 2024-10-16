import Popup from "./Popup.js";

export default class PopupWIthImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._popupSrc = this._popupElement.querySelector(".modal__preview-image");
    this._popupCap = this._popupElement.querySelector(".modal__image-caption");
  }
  open(data) {
    this._popupCap.textContent = data.name;
    this._popupSrc.src = data.link;
    this._popupSrc.alt = data.name;

    super.open();
  }
}
