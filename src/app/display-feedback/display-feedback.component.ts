import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../Services/review.service';
import { Review } from '../Types/Review';

@Component({
  selector: 'app-display-feedback',
  templateUrl: './display-feedback.component.html',
  styleUrls: ['./display-feedback.component.css']
})
export class DisplayFeedbackComponent implements OnInit {

  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getAllReviews().subscribe(data => {
      this.reviews = data;
    })
  }

}
