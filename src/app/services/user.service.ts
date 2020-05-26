import { Injectable } from '@angular/core';
import { Userlog } from "./../models/userlog";
import { Subject, ReplaySubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedUser: Subject<Userlog> = new ReplaySubject();
  userInfo: Userlog = {
    name: "",
    password: ""
  }
  constructor() { }
  setUserInfo (userData: Userlog) {
    this.userInfo.name = userData.name;
    this.userInfo.password = userData.password;
    this.loggedUser.next(this.userInfo);
  }
  retrieveUserInfo() {
    return this.userInfo
  }
}
