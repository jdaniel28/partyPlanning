import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../Types/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  
  root_url = "http://localhost:9090/";

  constructor(private http: HttpClient) { }



  postReview(review : Review) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(review);
    return this.http.post<Review>(this.root_url + "UserFeedback", body, { 'headers': headers, 'observe': 'response' });
  }

}
