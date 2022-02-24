import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { ScheduleService } from '../Services/schedule.service';
import { VenueService } from '../Services/venue.service';


import { Schedule } from '../Types/Schedule';
import { Venue } from '../Types/Venue';

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

  venues: Venue[] = [];

  constructor(private scheduleService: ScheduleService, private venueService: VenueService) { }

  ngOnInit(): void {
    this.venueService.getAllVenues().subscribe(data => {
      this.venues = data;
    })
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
