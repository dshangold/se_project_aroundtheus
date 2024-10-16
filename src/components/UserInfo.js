export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._jobElement.textContent.trim(),
    };
  }
  setUserInfo(data) {
    this._nameElement.textContent = data.title;
    this._jobElement.textContent = data.description;
  }
}
