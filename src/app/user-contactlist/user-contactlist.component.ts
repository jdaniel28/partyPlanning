import { Component, OnInit } from '@angular/core';
import { UsercontactService } from '../Services/usercontact.service';
import { UtilService } from '../Services/util.service';
import { UserContact } from '../Types/UserContact';

@Component({
  selector: 'app-user-contactlist',
  templateUrl: './user-contactlist.component.html',
  styleUrls: ['./user-contactlist.component.css']
})
export class UserContactlistComponent implements OnInit {

  usercontact: UserContact = {
    contactId: '',
    userId: '',

    name: '',

    contactNumber: '',
    email: ''

  }



  constructor(private usercontactService: UsercontactService, private utilService: UtilService) { }



  ngOnInit(): void {

  }



  onFormSubmit() {

    this.usercontact.userId = this.utilService.readLocalStorageUserId() as string;

    this.usercontactService.postUserContact(this.usercontact).subscribe(data => {

      data = data;

      if (data.status === 201) {

        alert(" User Contact created successfully")

      }

    });

  }



}






