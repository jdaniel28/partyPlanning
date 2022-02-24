import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserContact } from '../Types/UserContact';

@Injectable({
  providedIn: 'root'
})
export class UsercontactService {


  root_url = "http://localhost:9090/";

  constructor(private http: HttpClient) { }


  postUserContact(userContact: UserContact) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(userContact);
    return this.http.post<UserContact>(this.root_url + "UserContact", body, { 'headers': headers, 'observe': 'response' });
  }

  getAllUserContactList() {
    return this.http.get<UserContact[]>(this.root_url + "UserContactList/");
  }

  updateUserContact(userContact: UserContact) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(userContact);
    return this.http.put<any>(this.root_url + "updateUserContact", body, { 'headers': headers, 'observe': 'response' });
  }

  deleteUserContact(userContact: UserContact) {
    return this.http.delete<any>(this.root_url + "deleteUserContact/" + userContact.contactId, { 'observe': 'response' });
  }

}
