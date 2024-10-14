import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import Section from "../components/Section.js";
import PopupWIthImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  validationSettings,
  addNewCardButton,
} from "../components/constants.js";

const editFormElement = document.querySelector("#profile-edit-modal");
const addFormElement = document.querySelector("#add-card-modal");
const profileEditBtn = document.querySelector("#profile-edit-button");

// Popups

const imagePopup = new PopupWIthImage({
  popupSelector: "#preview-image-modal",
});

const editProfilePopup = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
    editProfilePopup.close();
  },
});

const userInfo = new UserInfo({
  nameSelector: "#profile-title",
  jobSelector: "#profile-description",
});

const addCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: ({ name, link }) => {
    const cardElement = createCard({ name, link });
    cardList.addItems(cardElement);
    addCardPopup.close();
  },
});

// Card Rendering

const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const cardElement = createCard(cardData);
      cardList.addItems(cardElement);
    },
  },
  ".cards__list"
);

// Card create function

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", (data) => {
    imagePopup.open(data);
  });
  return card.getView();
}

//

// Event Listeners

addNewCardButton.addEventListener("click", () => addCardPopup.open());
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
imagePopup.setEventListeners();

profileEditBtn.addEventListener("click", () => {
  editProfilePopup.open();
});

// Validation //

const editFormValidator = new FormValidator(
  validationSettings,
  editFormElement
);

const addFormValidator = new FormValidator(validationSettings, addFormElement);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

cardList.renderItems();
