import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InviteeService } from '../Services/invitee.service';
import { UsercontactService } from '../Services/usercontact.service';
import { Invitee } from '../Types/Invitee';
import { UserContact } from '../Types/UserContact';

@Component({
  selector: 'app-invite-contact-list',
  templateUrl: './invite-contact-list.component.html',
  styleUrls: ['./invite-contact-list.component.css']
})
export class InviteContactListComponent implements OnInit {
  userContact: UserContact[] = [];
  userContactDB: UserContact[] = [];
  editUserContact: UserContact = {
    contactId: '',
    userId: '',
    name: '',
    contactNumber: '',
    email: ''
  }
  closeResult = ''
  bookingId = sessionStorage.getItem('bookingId') as string;
  invitees !: Invitee[];

  constructor(private userContactService: UsercontactService, private modalService: NgbModal, private inviteeService: InviteeService) { }

  ngOnInit(): void {
    this.userContactService.getAllUserContactList().subscribe(data => {
      this.userContactDB = data;
      this.inviteeService.getInviteesById(this.bookingId).subscribe(data => {
        this.invitees = data;
        const indices: number[] = [];
        for (var i = 0; i < this.invitees.length; i++) {
          for (var j = 0; j < this.userContactDB.length; j++) {
            if (this.userContactDB[j].contactId == this.invitees[i].contactId) {
              indices.push(j);
              break;
            }
          }
        }
        for (var i = 0; i < this.userContactDB.length; i++) {
          if (!indices.includes(i)) {
            this.userContact.push(this.userContactDB[i])
          }
        }
      }, error => {
        this.userContact = this.userContactDB
      })
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

  onInvite(index: number) {
    const bookingId = sessionStorage.getItem('bookingId') as string;
    const greetingId = sessionStorage.getItem('greetingId') as string;
    const contactId = this.userContact[index].contactId
    const invitee: Invitee = {
      inviteeId: 0,
      greetingId: greetingId,
      bookingId: bookingId,
      contactId: contactId
    }
    this.inviteeService.addInvitee(invitee).subscribe(data => {
      alert("Invited")
      window.location.reload()
    }, error => {
      alert("Something went wrong");
    })
    console.log(invitee)
  }

  onFinish() {
    window.location.href = "dashboard"
  }

}
