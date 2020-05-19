import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginserviceService } from './../../services/loginservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup ({
    name: new FormControl('', [
      Validators.required
    ]), 
    password: new FormControl('', [
      Validators.required
    ])
  });
  
  
  constructor(private loginS: LoginserviceService, private _snackBar: MatSnackBar, private router: Router) { }
  
  ngOnInit(): void {
    
    
  }
  showFeedback (message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  goToItems() {
    this.router.navigate(['home']);
  }
  validate() {

    if(this.loginForm.value.name && this.loginForm.value.password) {
      if(this.loginS.isValidUser) {
        this.showFeedback(this.loginForm.value.name, ' is logged')
        this.goToItems();
      }
    }
  }
  
}
