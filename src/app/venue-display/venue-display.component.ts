import { Component, OnInit } from '@angular/core';
import { VenueService } from '../Services/venue.service';
import { Venue } from '../Types/Venue';


@Component({
  selector: 'app-venue-display',
  templateUrl: './venue-display.component.html',
  styleUrls: ['./venue-display.component.css']
})
export class VenueDisplayComponent implements OnInit {

  showMoreDetails = true;
  venue: Venue[] = [];
  constructor(private venueService: VenueService) { }

  ngOnInit(): void {
    this.venueService.getAllVenues().subscribe(data => {
      this.venue = data;
    })
  }

}
