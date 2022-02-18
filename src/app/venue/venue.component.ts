import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { Venue } from '../Types/Venue';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  venue: Venue = {
    venueId: '',
    venueName: '',
    venueType: '',
  }



  constructor(private restService: RestService) { }


  ngOnInit(): void {
  }

  onFormVenueSubmit() {
    console.log(this.venue)
    this.restService.postVenue(this.venue).subscribe(data => {
      data = data;
      if (data.status === 201) {
        alert("Venue added successfully")
      }
    });
  }

}
