import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { BookingService } from '../Services/booking.service';
import { Booking } from '../Types/Booking';
import { BookingSchedule } from '../Types/BookingSchedules';
import { Schedule } from '../Types/Schedule';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  bookingSchedules: BookingSchedule[] = [];
  schedule: Schedule = {
    venueId: '',
    scheduleId: '',
    startDate: '',
    endDate: '',
    facilities: '',
    maxCapacity: '',
    price: ''
  }

  @ViewChild('content')
  content!: ElementRef;
  public SavePDF(): void {
    let content = this.content.nativeElement;
    let doc = new jsPDF('p', 'pt', 'a3');
    let _elementHandlers =
    {
      '#editor': function (element: any, renderer: any) {
        return true;
      }
    };
    doc.html(this.content.nativeElement, {
      callback: (doc) => {
        doc.save('test.pdf');
      }

    });

  }
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getAllBookingSchedules().subscribe(data => {
      this.bookingSchedules = data;
      console.log(this.bookingSchedules)
    })
  }

  onSubmit() {
    console.log("here")
    this.bookingService.getBookingSchedulesByDate(this.schedule).subscribe(data => {
      this.bookingSchedules = data;
      console.log(this.bookingSchedules)
    }, err => {
      alert("Date not found")
    })
  }

}
