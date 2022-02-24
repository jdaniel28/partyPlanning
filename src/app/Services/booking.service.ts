import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../Types/Booking';
import { BookingSchedule } from '../Types/BookingSchedules';
import { Schedule } from '../Types/Schedule';

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
    return this.http.post<Booking>(this.root_url + "addBooking", body, { 'headers': headers });
  }

  getTempSchedules() {
    return this.http.get<Booking[]>(this.root_url + "tempBookings")
  }

  approveSchedule(booking: Booking) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(booking);
    return this.http.post<any>(this.root_url + "approveBooking", body, { 'headers': headers, 'observe': 'response' });
  }

  getConfirmedBookings() {
    return this.http.get<Booking[]>(this.root_url + "confirmedBookings")
  }

  getAllBookingSchedules() {
    return this.http.get<BookingSchedule[]>(this.root_url + "getBookingSchedules");
  }


  getBookingSchedulesByDate(schedule: Schedule) {
    const headers = { 'content-type': 'application/json' }
    const request = {
      startDate: schedule.startDate,
      endDate: schedule.endDate
    }
    const body = JSON.stringify(request);
    return this.http.post<BookingSchedule[]>(this.root_url + "bookingSchedules", body, { 'headers': headers });
  }

}
