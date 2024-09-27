export default class Card {
  constructor(data, cardSelector, handleCardImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardImageClick = handleCardImageClick;
  }

  _setEventListeners() {
    // ".card__like-button"
    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });
    // ".card__trash-button"
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });
    this._cardElement.addEventListener("click", () => {
      this._handleCardImageClick(this);
    });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__button-like_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove;
    this._cardElement = null;
  }

  getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._cardElement = this.getTemplate();
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._deleteButton = this._cardElement.querySelector(".card__trash-button");
    this._cardTitle = this._cardElement.querySelector(".card__title");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();
    return this._cardElement;
  }
}
