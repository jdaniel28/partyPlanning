import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../Types/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  root_url = "http://localhost:9090/";

  constructor(private http: HttpClient) { }

  bookSchedule(booking: Booking) {
    const headers = { 'content-type': 'application/json' }
    const request = {
      userId: booking.userId,
      scheduleId: booking.scheduleId
    }
    const body = JSON.stringify(request);
    return this.http.post<Booking>(this.root_url + "addBooking", body, { 'headers': headers, 'observe': 'response' });
  }

  getTempSchedules() {
    return this.http.get<Booking[]>(this.root_url + "tempBookings")
  }

  approveSchedule(booking: Booking) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(booking);
    return this.http.post<any>(this.root_url + "approveBooking", body, { 'headers': headers, 'observe': 'response' });
  }

}
