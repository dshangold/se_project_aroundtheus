export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._jobElement.textContent.trim(),
      avatar: this._avatarElement.src,
    };
  }
  setUserInfo(data) {
    this._nameElement.textContent = data.name;
    this._jobElement.textContent = data.about;
    this._avatarElement.src = data.avatar;
  }
}
