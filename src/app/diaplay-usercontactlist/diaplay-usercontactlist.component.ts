import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsercontactService } from '../Services/usercontact.service';
import { UserContact } from '../Types/UserContact';

@Component({
  selector: 'app-diaplay-usercontactlist',
  templateUrl: './diaplay-usercontactlist.component.html',
  styleUrls: ['./diaplay-usercontactlist.component.css']
})
export class DiaplayUsercontactlistComponent implements OnInit {
  closeResult = '';

  userContact: UserContact[] = [];
  editUserContact: UserContact = {
    contactId: '',
    userId: '',
    name: '',
    contactNumber: '',
    email: ''
  }

  constructor(private userContactService: UsercontactService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.userContactService.getAllUserContactList().subscribe(data => {
      this.userContact = data;
    })

  }


  open(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onEdit(index: number) {
    this.editUserContact = this.userContact[index]
  }

  onDelete(index: number) {
    this.userContactService.deleteUserContact(this.userContact[index]).subscribe(data => {
      alert("Deleted");
      window.location.reload();
    }, error => {
      alert("Something went wrong")
    })
  }
  onEditSubmit() {
    this.userContactService.updateUserContact(this.editUserContact).subscribe(data => {
      alert("Updated")
      window.location.reload();
    }, error => {
      alert("Something went wrong")
    })
  }
}