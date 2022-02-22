import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../Services/schedule.service';
import { Schedule } from '../Types/Schedule';

@Component({
  selector: 'app-display-schedule',
  templateUrl: './display-schedule.component.html',
  styleUrls: ['./display-schedule.component.css']
})
export class DisplayScheduleComponent implements OnInit {


  schedule: Schedule[] = [];
  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleService.getAllVenues().subscribe(data => {
      this.schedule = data;
    })

}

}
