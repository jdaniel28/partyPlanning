import { Component, OnInit } from '@angular/core';
import { UsercontactService } from '../Services/usercontact.service';
import { UserContact } from '../Types/UserContact';

@Component({
  selector: 'app-diaplay-usercontactlist',
  templateUrl: './diaplay-usercontactlist.component.html',
  styleUrls: ['./diaplay-usercontactlist.component.css']
})
export class DiaplayUsercontactlistComponent implements OnInit {

  userContact: UserContact[] = [];
  constructor(private userContactService: UsercontactService) { }

  ngOnInit(): void {
    this.userContactService.getAllUserContactList().subscribe(data => {
      this.userContact = data;
    })

  }

  onEdit() {

  }

  onDelete(index: number) {
    this.userContactService.deleteUserContact(this.userContact[index]).subscribe(data => {
      alert("Delted");
      window.location.reload();
    }, error => {
      alert("Something went wrong")
    })
  }
}