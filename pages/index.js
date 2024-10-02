import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormElement = document.querySelector("#profile-edit-modal");
const addFormElement = document.querySelector("#add-card-modal");

//Elements//
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const previewImageModal = document.querySelector("#preview-image-modal");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const modalSubmitButton = addCardFormElement.querySelector(".modal__button");
const profileEditForm = profileEditModal.querySelector(".modal__form");

const profileEditBtn = document.querySelector("#profile-edit-button");
const profileModalCloseBtn = profileEditModal.querySelector(".modal__close");
const addCardModalCloseBtn = addCardModal.querySelector(".modal__close");
const profileTitle = document.querySelector("#profile-title");
const profileDescription = document.querySelector("#profile-description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const cardListEl = document.querySelector(".cards__list");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const addNewCardButton = document.querySelector(".profile__add-button");
const cardTitleInput = addCardFormElement.querySelector("#card-title-input");
const cardLinkInput = addCardFormElement.querySelector("#card-link-input");

//Functions//

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImagePreview);
  return card.getView();
}

function renderCard(cardData, wrapper) {
  const cardElement = createCard(cardData);
  wrapper.prepend(cardElement);
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value.trim();
  closePopup(profileEditModal);
}

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  renderCard({ name, link }, cardListEl);
  addFormValidator.disableSubmitButton();
  closePopup(addCardModal);
  addCardFormElement.reset();
}

function handleCloseOverlay(evt) {
  if (evt.target.classList.contains("modal_opened")) {
    closePopup(evt.target);
  }
}

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const modalOpened = document.querySelector(".modal_opened");
    closePopup(modalOpened);
  }
}

const previewImage = previewImageModal.querySelector(".modal__preview-image");
const previewTitle = previewImageModal.querySelector(".modal__image-caption");

function handleImagePreview(cardData) {
  previewImage.src = cardData.link;
  previewImage.alt = cardData.name;
  previewTitle.textContent = cardData._name;

  openPopup(previewImageModal);
}

function closeImagePreviewModal() {
  closePopup(previewImageModal);
}

const closeButtons = document.querySelectorAll(".modal__close");

closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closePopup(popup));
});

// Event Listeners//
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent.trim();
  openPopup(profileEditModal);
});

[profileEditModal, addCardModal, previewImageModal].forEach((modal) => {
  modal.addEventListener("click", handleCloseOverlay);
});

addNewCardButton.addEventListener("click", () => openPopup(addCardModal));
addCardModalCloseBtn.addEventListener("click", () => closePopup(addCardModal));

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

// Validation //

const editFormValidator = new FormValidator(
  validationSettings,
  editFormElement
);

const addFormValidator = new FormValidator(validationSettings, addFormElement);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
