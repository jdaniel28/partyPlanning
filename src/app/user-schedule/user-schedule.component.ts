import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from '../Services/booking.service';
import { ScheduleService } from '../Services/schedule.service';
import { VenueService } from '../Services/venue.service';
import { Booking } from '../Types/Booking';
import { UtilService } from '../Services/util.service';
import { VenueSchedule } from '../Types/VenueSchedule';

@Component({
  selector: 'app-user-schedule',
  templateUrl: './user-schedule.component.html',
  styleUrls: ['./user-schedule.component.css']
})
export class UserScheduleComponent implements OnInit {

  venueSchedules: VenueSchedule[] = [];
  index !: number;

  closeResult = '';
  booking: Booking = {
    inviteId: '',
    bookingId: 0,
    scheduleId: '',
    userId: ''
  }

  constructor(private scheduleService: ScheduleService, private modalService: NgbModal, private bookingService: BookingService,
    private utilService: UtilService) { }

  ngOnInit(): void {

    this.scheduleService.getAllVenueSchedules().subscribe(data => {
      this.venueSchedules = data;
      console.log(this.venueSchedules)
    })
  }


  open(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onBook(index: number) {
    this.booking.scheduleId = this.venueSchedules[index].scheduleId;
    this.booking.userId = this.utilService.readLocalStorageUserId() as string;
    this.bookingService.bookSchedule(this.booking).subscribe(data => {
      alert("Booked! Thank you 😊")
    }, error => {
      alert("Something went wrong")
    })
  }

}
