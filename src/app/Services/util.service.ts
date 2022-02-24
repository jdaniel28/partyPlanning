import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  loggedIn = false;
  admin = false;
  constructor() { }

  readLocalStorageUserId() {
    return localStorage.getItem("partyUser");
  }

  readLocalStorageRole() {
    return localStorage.getItem("partyRole");
  }
}
