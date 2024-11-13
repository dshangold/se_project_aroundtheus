import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import Section from "../components/Section.js";
import PopupWIthImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import {
  initialCards,
  validationSettings,
  addNewCardButton,
  profileNameinput,
  profileDescriptionInput,
} from "../utils/constants.js";

const editFormElement = document.querySelector("#profile-edit-modal");
const addFormElement = document.querySelector("#add-card-modal");
const profileEditBtn = document.querySelector("#profile-edit-button");
const avatarEditBtn = document.querySelector("#profile-image-button");
const avatarEditForm = document.forms["edit-avatar-form"];
const avatar = document.querySelector(".profile__image");

// Popups

const imagePopup = new PopupWIthImage({
  popupSelector: "#preview-image-modal",
});

api
  .getUserInfo()
  .then((data) => {
    userInfo.setUserInfo({
      name: data.name,
      about: data.about,
      avatar: data.avatar,
    });
  })
  .catch((err) => console.error("Error Fetching User Info", err));

const userInfo = new UserInfo({
  nameSelector: "#profile-title",
  jobSelector: "#profile-description",
  avatarSelector: ".profile__image",
});

const editProfilePopup = new PopupWithForm({
  popupSelector: "#profile-edit-modal",
  handleFormSubmit: (data) => {
    editProfilePopup.renderLoading(true);
    api
      .setUserInfo(data.name, data.about)
      .then((updatedData) => {
        userInfo.setUserInfo(updatedData);
        editProfilePopup.close();
        editProfilePopup.resetForm();
        editFormValidator.disableSubmitButton();
      })
      .catch((err) => console.error("Error updating user info", err))
      .finally(() => {
        editProfilePopup.renderLoading(false);
      });
  },
});

const addCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: ({ name, link }) => {
    addCardPopup.renderLoading(true);
    api
      .addCard(name, link)
      .then((cardData) => {
        const cardElement = createCard(cardData);
        cardList.addItems(cardElement);
        addCardPopup.close();
        addCardPopup.resetForm();
        addFormValidator.disableSubmitButton();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        addCardPopup.renderLoading(false);
      });
  },
});

const confirmPopup = new PopupWithConfirm({
  popupSelector: "#confirmation-modal",
});

confirmPopup.setEventListeners();

// Card Rendering

const cardList = new Section(
  {
    renderer: (cardData) => {
      const cardElement = createCard(cardData);
      cardList.addItems(cardElement);
    },
  },
  ".cards__list"
);

// Card create function

function createCard(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    (data) => {
      imagePopup.open(data);
    },
    handleDeleteCardClick,
    handleLikeClick
  );
  return card.getView();
}

// Like Button

function handleLikeClick(cardID, cardInstance) {
  if (cardInstance._isLiked) {
    api
      .removeLike(cardID)
      .then(() => {
        cardInstance.setCardLike(false);
        console.log("like removed for card ID", cardID);
      })
      .catch((error) => console.error("error removing like:", error));
  } else {
    api
      .addLike(cardID)
      .then(() => {
        cardInstance.setCardLike(true);
      })
      .catch((error) => console.error("Error adding like", error));
  }
}

// Delete Button

function handleDeleteCardClick(cardInstance) {
  confirmPopup.open();
  confirmPopup.setSubmitAction(() => {
    api
      .deleteCard(cardInstance._id)
      .then(() => {
        cardInstance.handleDeleteCard();
        confirmPopup.close();
      })
      .catch((error) => console.error("Error deleting cards:", error));
  });
}

// Update Avatar

avatarEditBtn.addEventListener("click", () => {
  updateAvatarPopup.open();
});

const updateAvatarPopup = new PopupWithForm({
  popupSelector: "#edit-avatar-modal",
  handleFormSubmit: (userData) => {
    updateAvatarPopup.setIsLoading(true);
    const avatarURL = userData.link;
    api
      .updateAvatar(avatarURL)
      .then((updatedUserData) => {
        avatar.src = updatedUserData.avatar;
        updateAvatarPopup.close();
        updateAvatarPopup.resetForm();
        avatarFormValidator.disableSubmitButton();
      })
      .catch((err) => console.error("Error updating avatar", err))
      .finally(() => {
        updateAvatarPopup.setIsLoading(false);
      });
  },
});

updateAvatarPopup.setEventListeners();

// Event Listeners

addNewCardButton.addEventListener("click", () => addCardPopup.open());
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
imagePopup.setEventListeners();

profileEditBtn.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  profileNameinput.value = currentUserInfo.name;
  profileDescriptionInput.value = currentUserInfo.about;
  editProfilePopup.open();
});

// Validation //

const editFormValidator = new FormValidator(
  validationSettings,
  editFormElement
);

const addFormValidator = new FormValidator(validationSettings, addFormElement);

const avatarFormValidator = new FormValidator(
  validationSettings,
  avatarEditForm
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();

api
  .getInitialCards()
  .then((cardsData) => {
    cardList.renderItems(cardsData);
  })
  .catch((err) => console.error("Error fetching initial cards", err));
