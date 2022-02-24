import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invitee } from '../Types/Invitee';
import { InviteeDetails } from '../Types/InviteeDetails';

@Injectable({
  providedIn: 'root'
})
export class InviteeService {

  root_url = "http://localhost:9090/"

  constructor(private http: HttpClient) { }

  addInvitee(invitee: Invitee) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(invitee);
    return this.http.post<any>(this.root_url + "addInvitee", body, { 'headers': headers });
  }

  getInviteesById(bookingId: string) {
    return this.http.get<Invitee[]>(this.root_url + "getInvitees/" + bookingId);
  }

  getInviteeDetails(userId: string) {
    return this.http.get<InviteeDetails[]>(this.root_url + "getInviteeDetails/" + userId);
  }

}
