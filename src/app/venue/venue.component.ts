import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../Services/rest.service';
import { VenueService } from '../Services/venue.service';
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
    venueDescription: ''
  }
  myForm: FormGroup;

  selectedFile: any;
  photoSrc = "../../assets/blank_profile.png";



  constructor(private venueService: VenueService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      img: [null],
      filename: ['']
    })
  }


  ngOnInit(): void {
  }

  onFormVenueSubmit() {
    console.log(this.venue)
    const saveVenueData = new FormData();
    saveVenueData.append('photo', this.selectedFile, this.selectedFile.name);
    saveVenueData.append('venueId', this.venue.venueId);
    saveVenueData.append('venueName', this.venue.venueName);
    saveVenueData.append('venueType', this.venue.venueType);
    saveVenueData.append('venueDescription', this.venue.venueDescription);
    this.venueService.postVenue(saveVenueData).subscribe(data => {
      data = data;
      if (data.status === 201) {
        alert("Venue added successfully")
        window.location.href = "/viewVenue"
      }
    });
  }

  public onFileChanged(event: any) {
    //Select File

    this.selectedFile = event.target.files[0];
    this.myForm.patchValue({
      img: this.selectedFile
    });

    this.myForm.get('img')!.updateValueAndValidity()

    const reader = new FileReader();
    reader.onload = () => {
      this.photoSrc = reader.result as string;
    }
    reader.readAsDataURL(this.selectedFile)
    // this.photoSrc = this.selectedFile.webkitRelativePath;
  }

}
