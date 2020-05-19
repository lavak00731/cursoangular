import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }
  isValidUser() {
    return true;
  }
}
