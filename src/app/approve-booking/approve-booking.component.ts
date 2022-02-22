import { Component, OnInit } from '@angular/core';
import { BookingService } from '../Services/booking.service';
import { Booking } from '../Types/Booking';

@Component({
  selector: 'app-approve-booking',
  templateUrl: './approve-booking.component.html',
  styleUrls: ['./approve-booking.component.css']
})
export class ApproveBookingComponent implements OnInit {

  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getTempSchedules().subscribe(data => {
      this.bookings = data;
    })
  }

  onApprove(index: number) {
    this.bookingService.approveSchedule(this.bookings[index]).subscribe(data => {
      alert("Approved!")
      window.location.reload()
    })
  }

}
