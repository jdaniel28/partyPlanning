import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  loggedIn = false;
  admin = false;
  constructor() { }


  readCookie() {
    var cookie = document.cookie;
    if (cookie.length > 0) {
      var cookieVals: string[] = cookie.split(";");
      var role = cookieVals[1].split("=")[1]
      return role;
    }

    return "";
  }

  readUserId() {
    var cookie = document.cookie;
    if (cookie.length > 0) {
      var cookieVals: string[] = cookie.split(";");
      var userId = cookieVals[0].split("=")[1]
      return userId;
    }

    return "";
  }
}
