import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule } from '../Types/Schedule';
import { VenueSchedule } from '../Types/VenueSchedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  root_url = "http://localhost:9090/";

  constructor(private http: HttpClient) { }


  postSchedule(schedule: Schedule) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(schedule);
    return this.http.post<Schedule>(this.root_url + "Schedule", body, { 'headers': headers, 'observe': 'response' });
  }

  getAllVenues() {
    return this.http.get<Schedule[]>(this.root_url + "Schedules/");
  }

  getAllVenueSchedules() {
    return this.http.get<VenueSchedule[]>(this.root_url + "VenueSchedules")
  }



  getSchedulesByDate(endDate: string) {
    const headers = { 'content-type': 'application/json' }
    const request = {
      endDate: endDate
    }
    const body = JSON.stringify(request);
    return this.http.post<VenueSchedule[]>(this.root_url + "schedulesByDate", body, { 'headers': headers });
  }

}
