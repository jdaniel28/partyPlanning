import { Component, OnInit } from '@angular/core';
import { InviteeService } from '../Services/invitee.service';
import { UtilService } from '../Services/util.service';
import { InviteeDetails } from '../Types/InviteeDetails';

@Component({
  selector: 'app-view-invitees',
  templateUrl: './view-invitees.component.html',
  styleUrls: ['./view-invitees.component.css']
})
export class ViewInviteesComponent implements OnInit {

  inviteeDetails: InviteeDetails[] = [];

  constructor(private inviteeService: InviteeService, private utilService: UtilService) { }

  ngOnInit(): void {
    const userId = this.utilService.readLocalStorageUserId() as string
    this.inviteeService.getInviteeDetails(userId).subscribe(data => {
      this.inviteeDetails = data;
    })
  }

}
