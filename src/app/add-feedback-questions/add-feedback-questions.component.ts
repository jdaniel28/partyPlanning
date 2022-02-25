import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../Services/review.service';
import { FeedbackQuestions } from '../Types/FeedbackQuestion';

@Component({
  selector: 'app-add-feedback-questions',
  templateUrl: './add-feedback-questions.component.html',
  styleUrls: ['./add-feedback-questions.component.css']
})
export class AddFeedbackQuestionsComponent implements OnInit {

  reviewQns: FeedbackQuestions = {
    qId: 0,
    ques1: '',
    ques2: '',
    ques3: ''
  }
  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getFeedbackQuestions().subscribe(data => {
      this.reviewQns = data;
    })
  }


  onFormSubmit() {
    this.reviewService.editFeedbackQuestions(this.reviewQns).subscribe(data => {
      alert("Changed Successfully!")
    }, error => {
      alert("Something went wrong")
    })

  }
}
