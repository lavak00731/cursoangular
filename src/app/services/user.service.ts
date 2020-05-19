import { Injectable } from '@angular/core';
import { Userlog } from "./../models/userlog";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userInfo: Userlog = {
    name: "",
    password: ""
  }
  constructor() { }
  getUserInfo (userData: Userlog) {

  }
  retrieveUserInfo() {
    return this.userInfo
  }
}
