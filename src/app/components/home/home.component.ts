import { Component, OnInit } from '@angular/core';
import { Userlog } from "./../../models/userlog";
import { UserService } from './../../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: Userlog;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.loggedUser.subscribe((user) => this.user = user)
  }  
}
