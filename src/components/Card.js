export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardImageClick,
    handleDeleteCardClick,
    handleLikeClick
  ) {
    this._name = data.name;
    this._link = data.link;
    this._isLiked = data.isLiked;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handleCardImageClick = handleCardImageClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._handleLikeClick = handleLikeClick;
  }

  _setEventListeners() {
    // ".card__like-button"
    this._likeButton.addEventListener("click", () => {
      console.log("This", this);
      this._handleLikeClick(this._id, this);
    });
    // ".card__trash-button"
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCardClick(this);
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardImageClick({ link: this._link, name: this._name });
    });
  }

  _handleLikeIcon() {
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  setCardLike(isLiked) {
    this._isLiked = isLiked;
    this._handleLikeIcon();
  }

  handleDeleteCard() {
    this._cardElement.remove();
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
    this._handleLikeIcon();

    this._setEventListeners();
    return this._cardElement;
  }
}
