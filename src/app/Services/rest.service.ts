import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../Types/Answer';
import { Response } from '../Types/Response';
import { User } from '../Types/User';
import { Venue } from '../Types/Venue';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  root_url = "http://localhost:9090/";

  getUser(userId: string) {
    return this.http.get<User>(this.root_url + "User/" + userId);
  }

  postUser(user: User) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    return this.http.post<User>(this.root_url + "User", body, { 'headers': headers, 'observe': 'response' });
  }

  login(user: User) {
    const headers = { 'content-type': 'application/json' }
    var request = {
      userId: user.userId,
      password: user.password
    }
    const body = JSON.stringify(request);
    return this.http.post<Response>(this.root_url + "login", body, { 'headers': headers });
  }

  getUserIdForgotUserID(answers: Answer) {
    const headers = { 'content-type': 'application/json' }
    var request = {
      ans1: answers.ans1,
      ans2: answers.ans2,
      ans3: answers.ans3
    }
    const body = JSON.stringify(request)
    return this.http.put<Answer>(this.root_url + "forgotUserId", body, { 'headers': headers });
  }

  forgotPassword(answers: Answer) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(answers)
    return this.http.put<any>(this.root_url + "forgotPassword", body, { 'headers': headers, 'observe': 'response' });
  }

  changePassword(userId: string, password: string) {
    const headers = { 'content-type': 'application/json' }
    var request = {
      userId: userId,
      password: password
    }
    const body = JSON.stringify(request);
    return this.http.put<any>(this.root_url + "UserPassword", body, { 'headers': headers, 'observe': 'response' });
  }

  uploadPhoto(formData: FormData) {
    const headers = { 'content-type': 'application/json' }
    // var request = {
    //   userId: user.userId,
    //   photo: user.photo
    // }
    //const body = JSON.stringify(request);
    return this.http.put<any>(this.root_url + "uploadPhoto", formData, { 'observe': 'response' })
  }


  updateUser(user: User) {
    const headers = { 'content-type': 'application/json' }
    var request = {
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      dob: user.dob,
      gender: user.gender,
      contactNumber: user.contactNumber
    }
    const body = JSON.stringify(request);
    return this.http.put<any>(this.root_url + "updateUser", body, { 'headers': headers, 'observe': 'response' });
  }

}
