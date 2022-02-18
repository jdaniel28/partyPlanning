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
    photo: null
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
      this.user.dob
      console.log(data.dob);
      var photoTemp = data.photo.picByte;
      this.user.photo = 'data:image/jpeg;base64,' + photoTemp;
    })
  }

  onFormSubmit() {

  }



  onPhotoUpload() {
    console.log(this.selectedFile);
    var reader = new FileReader();
    console.log(document.getElementById("photo"))
    reader.readAsDataURL(this.selectedFile)
    const uploadImageData = new FormData();
    uploadImageData.append('photo', this.selectedFile);
    uploadImageData.append('userId', this.userId);
    const fileByteArray: any = [];
    reader.readAsArrayBuffer(this.selectedFile);
    reader.onloadend = (evt) => {
      if (evt.target.readyState === FileReader.DONE) {
        const arrayBuffer = evt.target.result,
          array = new Uint8Array(arrayBuffer);
        for (const a of array) {
          fileByteArray.push(a);
        }
        console.log(fileByteArray)
      }
    }
    this.user.photo = this.selectedFile;
    console.log(this.user.photo)
    this.restService.uploadPhoto(this.user).subscribe(data => {
      alert(data.status)
    })
    //console.log(uploadImageData);
  }

}
