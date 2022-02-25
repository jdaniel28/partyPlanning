import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../Services/review.service';
import { FeedbackWithQns } from '../Types/FeedbackWithQns';
import { Review } from '../Types/Review';

@Component({
  selector: 'app-display-feedback',
  templateUrl: './display-feedback.component.html',
  styleUrls: ['./display-feedback.component.css']
})
export class DisplayFeedbackComponent implements OnInit {


  feedback: FeedbackWithQns[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {

    this.reviewService.getFeedbackWithQuestions().subscribe(data => {
      this.feedback = data
    })
  }

}
