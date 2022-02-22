import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { ScheduleService } from '../Services/schedule.service';


import { Schedule } from '../Types/Schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule: Schedule = {
    venueId: '',
    scheduleId: '',
    startDate: '',
    endDate: '',
    facilities: '',
    maxCapacity: '',
    price: ''

  }

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
  }

  onFormVenueSubmit() {
    console.log(this.schedule)
    this.scheduleService.postSchedule(this.schedule).subscribe(data => {
      data = data;
      if (data.status === 201) {
        alert("Schedule added successfully")
      }
    });
  }

}
