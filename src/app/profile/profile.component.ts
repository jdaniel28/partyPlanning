import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { UtilService } from '../Services/util.service';
import { User } from '../Types/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedFile !: any;
  isPhotoUpdated = false;

  updatedPhoto: any;

  userId !: string;

  user: User = {
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    contactNumber: '',
    userId: '',
    password: '',
    ans1: '',
    ans2: '',
    ans3: '',
    photoName: ''
  }
  retrievedImage !: any

  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  constructor(private restService: RestService, private utilService: UtilService) { }

  ngOnInit(): void {
    this.userId = this.utilService.readUserId();
    this.restService.getUser(this.userId).subscribe(data => {
      this.user = data;
      console.log(this.user.photoName.length)
      if (this.user.photoName.length < 55) {
        this.user.photoName = "../../assets/blank_profile.png";
      }
    })
  }

  onFormSubmit() {
    this.restService.updateUser(this.user).subscribe(data => {
      alert("Updated!")
    }, error => {
      alert("Error!")
    })
  }

  onPhotoUpload() {
    const uploadImageData = new FormData();
    uploadImageData.append('photo', this.selectedFile, this.selectedFile.name);
    uploadImageData.append('userId', this.userId);

    this.restService.uploadPhoto(uploadImageData).subscribe(data => {
      location.reload();
    })
  }

}
