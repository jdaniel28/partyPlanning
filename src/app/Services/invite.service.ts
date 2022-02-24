import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invite } from '../Types/Invite';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  root_url = "http://localhost:9090/"

  constructor(private http: HttpClient) { }

  addInvite(formData: FormData) {
    return this.http.post<any>(this.root_url + "addInvite", formData, { 'observe': 'response' });
  }

  getAllInvites() {
    return this.http.get<Invite[]>(this.root_url + "getInvites");
  }

}
