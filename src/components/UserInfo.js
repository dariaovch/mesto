export default class UserInfo {
    constructor({ nameElement, occupationElement, avatarElement }){
        this._name = nameElement;
        this._occupation = occupationElement;
        this._avatar = avatarElement;
    }

    getUserInfo() {
        this._profileInfo = {};
        
        this._profileInfo.name = this._name.textContent;
        this._profileInfo.about = this._occupation.textContent;
        this._profileInfo.avatar = this._avatar.src;
      
       return this._profileInfo;
       
    }

    setUserInfo(formData) {
        this._name.textContent = formData.name;
        this._occupation.textContent = formData.about;
        this._avatar.src = formData.avatar;
    }
}