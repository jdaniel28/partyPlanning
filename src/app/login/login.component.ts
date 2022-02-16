import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { User } from '../Types/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    contactNumber: '',
    userId: '',
    password: ''
  }
  constructor(private restService: RestService) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.restService.login(this.user).subscribe(data => {
      if (data.status == 200) {
        alert("Logged In")
      }
    }, error => {
      alert("User ID or Password is incorrect")
    })
  }

}
