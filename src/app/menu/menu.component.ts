import { Component, OnInit } from '@angular/core';
import { UtilService } from '../Services/util.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn = false;
  isAdmin = false;
  isShown = false;
  constructor(private utilService: UtilService) {

  }

  ngOnInit(): void {

    var role = this.utilService.readLocalStorageRole();
    if (role == 'admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    } else if (role == 'user') {
      this.isLoggedIn = true;
      this.isAdmin = false;
    } else {
      this.isAdmin = false;
      this.isLoggedIn = false;
    }
  }

  onLogOut() {
    // var cookie = document.cookie;
    // var cookieVal = cookie.split(";")
    // document.cookie = cookieVal[0] + ";expires=Thu, 18 Dec 2013 12:00:00 UTC";
    // document.cookie = cookieVal[1] + ";expires=Thu, 18 Dec 2013 12:00:00 UTC";
    localStorage.removeItem('partyUser')
    localStorage.removeItem('partyRole')
    window.location.href = "/login"
  }

}
