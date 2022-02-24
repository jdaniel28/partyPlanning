import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { ReviewService } from '../Services/review.service';
import { Review } from '../Types/Review';
import { User } from '../Types/User';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {


  review: Review = {
    feedbackId: "",
    userId: "",
    bookingId: 0,
    ans1: "",
    ans2: "",
    ans3: "",
    rating: "",
  }

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
  }

  onFormReviewSubmit() {
    console.log(this.review)
    const bookingId = parseInt(sessionStorage.getItem('bookingId') as string)
    const userId = localStorage.getItem('partyUser') as string;
    this.review.bookingId = bookingId
    this.review.userId = userId
    this.reviewService.postReview(this.review).subscribe(data => {
      data = data;
      console.log(data);
      if (data.status === 201) {
        alert("Review added successfully")
      }
    });
  }




}