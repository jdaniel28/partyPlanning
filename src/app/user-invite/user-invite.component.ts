import { Component, OnInit } from '@angular/core';
import { InviteService } from '../Services/invite.service';
import { Invite } from '../Types/Invite';

@Component({
  selector: 'app-user-invite',
  templateUrl: './user-invite.component.html',
  styleUrls: ['./user-invite.component.css']
})
export class UserInviteComponent implements OnInit {

  invites: Invite[] = []

  constructor(private inviteService: InviteService) { }

  imgArr: string[] = ['https://partyplanning.s3.ap-south-1.amazonaws.com/u_ety.png',
    'https://partyplanning.s3.ap-south-1.amazonaws.com/u_ert.png', 'https://partyplanning.s3.ap-south-1.amazonaws.com/u_jdaniel28.png'];

  ngOnInit(): void {
    this.inviteService.getAllInvites().subscribe(data => {
      this.invites = data;
    })
  }

  onInviteSelect(index: number) {
    console.log(this.invites[index])
  }

}
