!function(){"use strict";class e{constructor(e,t,s){this._name=e.name,this._link=e.link,this._cardSelector=t,this._handleCardImageClick=s}_setEventListeners(){this._likeButton.addEventListener("click",(()=>{this._handleLikeIcon()})),this._deleteButton.addEventListener("click",(()=>{this._handleDeleteCard()})),this._cardImage.addEventListener("click",(()=>{this._handleCardImageClick({link:this._link,name:this._name})}))}_handleLikeIcon(){this._likeButton.classList.toggle("card__like-button_active")}_handleDeleteCard(){this._cardElement.remove(),this._cardElement=null}getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}getView(){return this._cardElement=this.getTemplate(),this._likeButton=this._cardElement.querySelector(".card__like-button"),this._cardImage=this._cardElement.querySelector(".card__image"),this._deleteButton=this._cardElement.querySelector(".card__trash-button"),this._cardTitle=this._cardElement.querySelector(".card__title"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._setEventListeners(),this._cardElement}}var t=class{constructor(e,t){this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formEl=t}_showInputError(e){const t=this._formEl.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}_hideInputError(e){const t=this._formEl.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}_hasInvalidInput(){return!this._inputEls.every((e=>e.validity.valid))}_checkInputValidity(e){if(!e.validity.valid)return this._showInputError(e);this._hideInputError(e)}_toggleButtonState(e){this._hasInvalidInput(e)?this.disableSubmitButton():(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}disableSubmitButton(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}_setEventListeners(){this._inputEls=[...this._formEl.querySelectorAll(this._inputSelector)],this._submitButton=this._formEl.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputEls.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState(this._inputEls,this._submitButton)}))}))}enableValidation(){this._formEl.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}};class s{constructor(e){let{popupSelector:t}=e;this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}open(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popupElement.classList.remove("modal_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose(e){"Escape"===e.key&&this.close()}setEventListeners(){this._popupElement.querySelector(".modal__close").addEventListener("click",(()=>{this.close()})),this._popupElement.addEventListener("mousedown",(e=>{(e.target.classList.contains("modal")||e.target.classList.contains("modal_opened"))&&this.close()}))}}class n extends s{constructor(e){let{popupSelector:t,handleFormSubmit:s}=e;super({popupSelector:t}),this._popupForm=this._popupElement.querySelector(".modal__form"),this._handleFormSubmit=s,this._inputElements=this._popupElement.querySelectorAll(".modal__input")}_getInputValues(){const e={};return this._inputElements.forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){super.setEventListeners(),this._popupForm.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues()),this._popupForm.reset()}))}close(){super.close()}}const i={inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},o=document.querySelector(".profile__add-button"),r=document.querySelector("#profile-title-input"),a=document.querySelector("#profile-description-input"),l=document.querySelector("#profile-edit-modal"),c=document.querySelector("#add-card-modal"),u=document.querySelector("#profile-edit-button"),d=new class extends s{constructor(e){let{popupSelector:t}=e;super({popupSelector:t}),this._popupSrc=this._popupElement.querySelector(".modal__preview-image"),this._popupCap=this._popupElement.querySelector(".modal__image-caption")}open(e){this._popupCap.textContent=e.name,this._popupSrc.src=e.link,this._popupSrc.alt=e.name,super.open()}}({popupSelector:"#preview-image-modal"}),m=new n({popupSelector:"#profile-edit-modal",handleFormSubmit:e=>{p.setUserInfo(e),m.close(),S.disableSubmitButton()}}),p=new class{constructor(e){let{nameSelector:t,jobSelector:s}=e;this._nameElement=document.querySelector(t),this._jobElement=document.querySelector(s)}getUserInfo(){return{name:this._nameElement.textContent,description:this._jobElement.textContent.trim()}}setUserInfo(e){this._nameElement.textContent=e.title,this._jobElement.textContent=e.description}}({nameSelector:"#profile-title",jobSelector:"#profile-description"}),_=new n({popupSelector:"#add-card-modal",handleFormSubmit:e=>{const t=E(e.name,e.link);h.addItems(t),_.close(),v.disableSubmitButton()}}),h=new class{constructor(e,t){let{items:s,renderer:n}=e;this._renderer=n,this._container=document.querySelector(t),this._items=s}renderItems(){this._items.forEach((e=>{this._renderer(e)}))}addItems(e){this._container.prepend(e)}}({items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}],renderer:e=>{const t=E(e);h.addItems(t)}},".cards__list");function E(t){return new e(t,"#card-template",(e=>{d.open(e)})).getView()}o.addEventListener("click",(()=>_.open())),m.setEventListeners(),_.setEventListeners(),d.setEventListeners(),u.addEventListener("click",(()=>{const e=p.getUserInfo();r.value=e.name,a.value=e.description,m.open()}));const S=new t(i,l),v=new t(i,c);S.enableValidation(),v.enableValidation(),h.renderItems()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCxFQUFpQjdCLE1BQU0sSUFLekIsTUFBTWdDLEVBQW9CLElBQUkyQixFQUM1QnhDLEVBQ0FJLEdBR0l3QixFQUFtQixJQUFJWSxFQUFjeEMsRUFBb0JLLEdBRS9EUSxFQUFrQnpDLG1CQUNsQndELEVBQWlCeEQsbUJBRWpCc0QsRUFBU1MsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIGNhcmRTZWxlY3RvciwgaGFuZGxlQ2FyZEltYWdlQ2xpY2spIHtcbiAgICB0aGlzLl9uYW1lID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRJbWFnZUNsaWNrID0gaGFuZGxlQ2FyZEltYWdlQ2xpY2s7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy8gXCIuY2FyZF9fbGlrZS1idXR0b25cIlxuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VJY29uKCk7XG4gICAgfSk7XG4gICAgLy8gXCIuY2FyZF9fdHJhc2gtYnV0dG9uXCJcbiAgICB0aGlzLl9kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQoKTtcbiAgICB9KTtcbiAgICB0aGlzLl9jYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRJbWFnZUNsaWNrKHsgbGluazogdGhpcy5fbGluaywgbmFtZTogdGhpcy5fbmFtZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVMaWtlSWNvbigpIHtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gIH1cblxuICBfaGFuZGxlRGVsZXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5yZW1vdmUoKTtcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IG51bGw7XG4gIH1cblxuICBnZXRUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcbiAgfVxuXG4gIGdldFZpZXcoKSB7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSB0aGlzLmdldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIik7XG4gICAgdGhpcy5fY2FyZEltYWdlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKTtcbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RyYXNoLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9jYXJkVGl0bGUgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpO1xuICAgIHRoaXMuX2NhcmRJbWFnZS5zcmMgPSB0aGlzLl9saW5rO1xuICAgIHRoaXMuX2NhcmRJbWFnZS5hbHQgPSB0aGlzLl9uYW1lO1xuICAgIHRoaXMuX2NhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XG5cbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzLl9jYXJkRWxlbWVudDtcbiAgfVxufVxuIiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWwpIHtcbiAgICB0aGlzLl9mb3JtU2VsZWN0b3IgPSBzZXR0aW5ncy5mb3JtU2VsZWN0b3I7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybUVsO1xuICB9XG5cbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yTWVzc2FnZUVsLnRleHRDb250ZW50ID0gaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICBlcnJvck1lc3NhZ2VFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbCA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yTWVzc2FnZUVsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBlcnJvck1lc3NhZ2VFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gIXRoaXMuX2lucHV0RWxzLmV2ZXJ5KChpbnB1dEVsKSA9PiBpbnB1dEVsLnZhbGlkaXR5LnZhbGlkKTtcbiAgfVxuXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCkge1xuICAgIGlmICghaW5wdXRFbC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWwpO1xuICAgIH1cblxuICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWwpO1xuICB9XG5cbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0RWwpIHtcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KGlucHV0RWwpKSB7XG4gICAgICB0aGlzLmRpc2FibGVTdWJtaXRCdXR0b24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBkaXNhYmxlU3VibWl0QnV0dG9uKCkge1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5faW5wdXRFbHMgPSBbLi4udGhpcy5fZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcildO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm1FbC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xuXG4gICAgdGhpcy5faW5wdXRFbHMuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xuICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuX2lucHV0RWxzLCB0aGlzLl9zdWJtaXRCdXR0b24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gIH1cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZVwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldnQpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbFwiKSB8fFxuICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX29wZW5lZFwiKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCB9KSB7XG4gICAgc3VwZXIoeyBwb3B1cFNlbGVjdG9yIH0pO1xuICAgIHRoaXMuX3BvcHVwRm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICAgIHRoaXMuX2lucHV0RWxlbWVudHMgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9faW5wdXRcIik7XG4gIH1cblxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZXMgPSB7fTtcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzLmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgaW5wdXRWYWx1ZXNbaW5wdXRFbGVtZW50Lm5hbWVdID0gaW5wdXRFbGVtZW50LnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBpbnB1dFZhbHVlcztcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fcG9wdXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICB9XG59XG5cbiIsImV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC95b3NlbWl0ZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFrZSBMb3Vpc2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFrZS1sb3Vpc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xhdGVtYXIuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC92YW5vaXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25TZXR0aW5ncyA9IHtcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX2J1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGFkZE5ld0NhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XG5leHBvcnQgY29uc3QgcHJvZmlsZU5hbWVpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS10aXRsZS1pbnB1dFwiKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI3Byb2ZpbGUtZGVzY3JpcHRpb24taW5wdXRcIlxuKTtcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IFBvcHVwV0l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCB7XG4gIGluaXRpYWxDYXJkcyxcbiAgdmFsaWRhdGlvblNldHRpbmdzLFxuICBhZGROZXdDYXJkQnV0dG9uLFxuICBwcm9maWxlTmFtZWlucHV0LFxuICBwcm9maWxlRGVzY3JpcHRpb25JbnB1dCxcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBlZGl0Rm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtZWRpdC1tb2RhbFwiKTtcbmNvbnN0IGFkZEZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1tb2RhbFwiKTtcbmNvbnN0IHByb2ZpbGVFZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWVkaXQtYnV0dG9uXCIpO1xuXG4vLyBQb3B1cHNcblxuY29uc3QgaW1hZ2VQb3B1cCA9IG5ldyBQb3B1cFdJdGhJbWFnZSh7XG4gIHBvcHVwU2VsZWN0b3I6IFwiI3ByZXZpZXctaW1hZ2UtbW9kYWxcIixcbn0pO1xuXG5jb25zdCBlZGl0UHJvZmlsZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBwb3B1cFNlbGVjdG9yOiBcIiNwcm9maWxlLWVkaXQtbW9kYWxcIixcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGRhdGEpID0+IHtcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyhkYXRhKTtcbiAgICBlZGl0UHJvZmlsZVBvcHVwLmNsb3NlKCk7XG4gICAgZWRpdEZvcm1WYWxpZGF0b3IuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xuICB9LFxufSk7XG5cbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcbiAgbmFtZVNlbGVjdG9yOiBcIiNwcm9maWxlLXRpdGxlXCIsXG4gIGpvYlNlbGVjdG9yOiBcIiNwcm9maWxlLWRlc2NyaXB0aW9uXCIsXG59KTtcblxuY29uc3QgYWRkQ2FyZFBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBwb3B1cFNlbGVjdG9yOiBcIiNhZGQtY2FyZC1tb2RhbFwiLFxuICBoYW5kbGVGb3JtU3VibWl0OiAoY2FyZERhdGEpID0+IHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNyZWF0ZUNhcmQoY2FyZERhdGEubmFtZSwgY2FyZERhdGEubGluayk7XG4gICAgY2FyZExpc3QuYWRkSXRlbXMoY2FyZEVsZW1lbnQpO1xuICAgIGFkZENhcmRQb3B1cC5jbG9zZSgpO1xuICAgIGFkZEZvcm1WYWxpZGF0b3IuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xuICB9LFxufSk7XG5cbi8vIENhcmQgUmVuZGVyaW5nXG5cbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICBpdGVtczogaW5pdGlhbENhcmRzLFxuICAgIHJlbmRlcmVyOiAoY2FyZERhdGEpID0+IHtcbiAgICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY3JlYXRlQ2FyZChjYXJkRGF0YSk7XG4gICAgICBjYXJkTGlzdC5hZGRJdGVtcyhjYXJkRWxlbWVudCk7XG4gICAgfSxcbiAgfSxcbiAgXCIuY2FyZHNfX2xpc3RcIlxuKTtcblxuLy8gQ2FyZCBjcmVhdGUgZnVuY3Rpb25cblxuZnVuY3Rpb24gY3JlYXRlQ2FyZChjYXJkRGF0YSkge1xuICBjb25zdCBjYXJkID0gbmV3IENhcmQoY2FyZERhdGEsIFwiI2NhcmQtdGVtcGxhdGVcIiwgKGRhdGEpID0+IHtcbiAgICBpbWFnZVBvcHVwLm9wZW4oZGF0YSk7XG4gIH0pO1xuICByZXR1cm4gY2FyZC5nZXRWaWV3KCk7XG59XG5cbi8vXG5cbi8vIEV2ZW50IExpc3RlbmVyc1xuXG5hZGROZXdDYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhZGRDYXJkUG9wdXAub3BlbigpKTtcbmVkaXRQcm9maWxlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmFkZENhcmRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuaW1hZ2VQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5wcm9maWxlRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBjdXJyZW50VXNlckluZm8gPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xuICBwcm9maWxlTmFtZWlucHV0LnZhbHVlID0gY3VycmVudFVzZXJJbmZvLm5hbWU7XG4gIHByb2ZpbGVEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gY3VycmVudFVzZXJJbmZvLmRlc2NyaXB0aW9uO1xuICBlZGl0UHJvZmlsZVBvcHVwLm9wZW4oKTtcbn0pO1xuXG4vLyBWYWxpZGF0aW9uIC8vXG5cbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXG4gIHZhbGlkYXRpb25TZXR0aW5ncyxcbiAgZWRpdEZvcm1FbGVtZW50XG4pO1xuXG5jb25zdCBhZGRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvblNldHRpbmdzLCBhZGRGb3JtRWxlbWVudCk7XG5cbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5jYXJkTGlzdC5yZW5kZXJJdGVtcygpO1xuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV0l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IgfSkge1xuICAgIHN1cGVyKHsgcG9wdXBTZWxlY3RvciB9KTtcbiAgICB0aGlzLl9wb3B1cFNyYyA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWltYWdlXCIpO1xuICAgIHRoaXMuX3BvcHVwQ2FwID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2ltYWdlLWNhcHRpb25cIik7XG4gIH1cbiAgb3BlbihkYXRhKSB7XG4gICAgdGhpcy5fcG9wdXBDYXAudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5fcG9wdXBTcmMuc3JjID0gZGF0YS5saW5rO1xuICAgIHRoaXMuX3BvcHVwU3JjLmFsdCA9IGRhdGEubmFtZTtcblxuICAgIHN1cGVyLm9wZW4oKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3Rvciwgam9iU2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX25hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xuICAgIHRoaXMuX2pvYkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpvYlNlbGVjdG9yKTtcbiAgfVxuICBnZXRVc2VySW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5fam9iRWxlbWVudC50ZXh0Q29udGVudC50cmltKCksXG4gICAgfTtcbiAgfVxuICBzZXRVc2VySW5mbyhkYXRhKSB7XG4gICAgdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLnRpdGxlO1xuICAgIHRoaXMuX2pvYkVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gIH1cblxuICByZW5kZXJJdGVtcygpIHtcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW1zKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJjYXJkU2VsZWN0b3IiLCJoYW5kbGVDYXJkSW1hZ2VDbGljayIsInRoaXMiLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsImxpbmsiLCJfY2FyZFNlbGVjdG9yIiwiX2hhbmRsZUNhcmRJbWFnZUNsaWNrIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiX2xpa2VCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUxpa2VJY29uIiwiX2RlbGV0ZUJ1dHRvbiIsIl9oYW5kbGVEZWxldGVDYXJkIiwiX2NhcmRJbWFnZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9jYXJkRWxlbWVudCIsInJlbW92ZSIsImdldFRlbXBsYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsImdldFZpZXciLCJfY2FyZFRpdGxlIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJzZXR0aW5ncyIsImZvcm1FbCIsIl9mb3JtU2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsIiwiX3Nob3dJbnB1dEVycm9yIiwiaW5wdXRFbCIsImVycm9yTWVzc2FnZUVsIiwiaWQiLCJhZGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsIl9oYXNJbnZhbGlkSW5wdXQiLCJfaW5wdXRFbHMiLCJldmVyeSIsInZhbGlkaXR5IiwidmFsaWQiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiZGlzYWJsZVN1Ym1pdEJ1dHRvbiIsIl9zdWJtaXRCdXR0b24iLCJkaXNhYmxlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZW5hYmxlVmFsaWRhdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwiX3JlZiIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsIm9wZW4iLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldnQiLCJrZXkiLCJzZXRFdmVudExpc3RlbmVycyIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdXBlciIsIl9wb3B1cEZvcm0iLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9pbnB1dEVsZW1lbnRzIiwiX2dldElucHV0VmFsdWVzIiwiaW5wdXRWYWx1ZXMiLCJpbnB1dEVsZW1lbnQiLCJ2YWx1ZSIsInJlc2V0IiwidmFsaWRhdGlvblNldHRpbmdzIiwiYWRkTmV3Q2FyZEJ1dHRvbiIsInByb2ZpbGVOYW1laW5wdXQiLCJwcm9maWxlRGVzY3JpcHRpb25JbnB1dCIsImVkaXRGb3JtRWxlbWVudCIsImFkZEZvcm1FbGVtZW50IiwicHJvZmlsZUVkaXRCdG4iLCJpbWFnZVBvcHVwIiwiX3BvcHVwU3JjIiwiX3BvcHVwQ2FwIiwiZWRpdFByb2ZpbGVQb3B1cCIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJlZGl0Rm9ybVZhbGlkYXRvciIsIm5hbWVTZWxlY3RvciIsImpvYlNlbGVjdG9yIiwiX25hbWVFbGVtZW50IiwiX2pvYkVsZW1lbnQiLCJnZXRVc2VySW5mbyIsImRlc2NyaXB0aW9uIiwidHJpbSIsInRpdGxlIiwiYWRkQ2FyZFBvcHVwIiwiY2FyZERhdGEiLCJjYXJkRWxlbWVudCIsImNyZWF0ZUNhcmQiLCJjYXJkTGlzdCIsImFkZEl0ZW1zIiwiYWRkRm9ybVZhbGlkYXRvciIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJfaXRlbXMiLCJyZW5kZXJJdGVtcyIsIml0ZW0iLCJlbGVtZW50IiwicHJlcGVuZCIsImN1cnJlbnRVc2VySW5mbyIsIkZvcm1WYWxpZGF0b3IiXSwic291cmNlUm9vdCI6IiJ9