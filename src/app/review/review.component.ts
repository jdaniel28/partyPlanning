import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { ReviewService } from '../Services/review.service';
import { FeedbackQuestions } from '../Types/FeedbackQuestion';
import { Review } from '../Types/Review';
import { User } from '../Types/User';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviewQns: FeedbackQuestions = {
    qId: 0,
    ques1: '',
    ques2: '',
    ques3: ''
  }

  review: Review = {
    feedbackId: "",
    userId: "",
    bookingId: 0,
    ans1: "",
    ans2: "",
    ans3: "",
    rating: "",
    qId: 0
  }

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getFeedbackQuestions().subscribe(data => {
      this.reviewQns = data;
    })
  }

  onFormReviewSubmit() {
    console.log(this.review)
    const bookingId = parseInt(sessionStorage.getItem('bookingId') as string)
    const userId = localStorage.getItem('partyUser') as string;
    this.review.bookingId = bookingId
    this.review.userId = userId
    this.review.qId = this.reviewQns.qId
    this.reviewService.postReview(this.review).subscribe(data => {
      data = data;
      if (data.status === 201) {
        alert("Review added successfully")
      }
    });
  }




}