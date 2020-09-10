export default class UserInfo {
    constructor({ nameElement, occupationElement }){
        this._name = nameElement;
        this._occupation = occupationElement;
    }

    getUserInfo() {
        this._profileInfo = {};
        
        this._profileInfo.name = this._name.textContent;
        this._profileInfo.occupation = this._occupation.textContent;
      
       return this._profileInfo;
       
    }

    setUserInfo(formData) {
        this._name.textContent = formData.name;
        this._occupation.textContent = formData.occupation;
    }
}