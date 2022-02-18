import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { User } from '../Types/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  confirmPassword: string = '';
  user: User = {
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    contactNumber: '',
    userId: '',
    password: '',
    ans1: '',
    ans2: '',
    ans3: '',
    photo: null
  }

  constructor(private restService: RestService) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    console.log(this.user)
    this.restService.postUser(this.user).subscribe(data => {
      data = data;
      if (data.status === 201) {
        alert("New user created successfully")
      }
    });
  }

}
