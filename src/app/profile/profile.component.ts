import { Component, OnInit } from '@angular/core';
import { RestService } from '../Services/rest.service';
import { UtilService } from '../Services/util.service';
import { User } from '../Types/User';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedFile !: any;
  isPhotoUpdated = false;
  myForm!: FormGroup;
  updatedPhoto: any;
  photoChanged = false;

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
    photoName: '../../assets/blank_profile.png'
  }
  retrievedImage !: any
  public onFileChanged(event: any) {
    //Select File
    this.photoChanged = true;
    this.selectedFile = event.target.files[0];
    this.myForm.patchValue({
      img: this.selectedFile
    });

    this.myForm.get('img')!.updateValueAndValidity()

    const reader = new FileReader();
    reader.onload = () => {
      this.user.photoName = reader.result as string;
    }
    reader.readAsDataURL(this.selectedFile)
    // this.photoSrc = this.selectedFile.webkitRelativePath;
  }

  constructor(private restService: RestService, private utilService: UtilService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      img: [null],
      filename: ['']
    })
  }

  ngOnInit(): void {
    this.userId = this.utilService.readLocalStorageUserId() as string;

    this.restService.getUser(this.userId).subscribe(data => {
      this.user = data;
      if (this.user.photoName.length < 55) {
        this.user.photoName = "../../assets/blank_profile.png";
      }
    })
  }

  onFormSubmit() {

    this.restService.updateUser(this.user).subscribe(data => {
      if (this.photoChanged) {
        const uploadImageData = new FormData();
        uploadImageData.append('photo', this.selectedFile, this.selectedFile.name);
        uploadImageData.append('userId', this.userId);
        this.restService.uploadPhoto(uploadImageData).subscribe(data => {
          alert("Updated!")
          location.reload();
        })
      } else {
        alert("Updated")
      }


    }, error => {
      alert("Error!")
    })
  }

  onPhotoUpload() {

  }

}
