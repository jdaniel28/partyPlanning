import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InviteService } from '../Services/invite.service';
import { Invite } from '../Types/Invite';

@Component({
  selector: 'app-create-invite',
  templateUrl: './create-invite.component.html',
  styleUrls: ['./create-invite.component.css']
})
export class CreateInviteComponent implements OnInit {
  myForm: FormGroup;

  selectedFile: any;
  photoSrc = "../../assets/blank_profile.png";
  invite: Invite = {
    inviteId: 0,
    photoName: '',
    inviteText: ''
  }
  constructor(private fb: FormBuilder, private inviteService: InviteService) {
    this.myForm = this.fb.group({
      img: [null],
      filename: ['']
    })
  }

  ngOnInit(): void {
  }
  onFormSubmit() {
    const saveInviteData = new FormData();
    saveInviteData.append('photo', this.selectedFile, this.selectedFile.name);
    saveInviteData.append("inviteText", this.invite.inviteText);
    this.inviteService.addInvite(saveInviteData).subscribe(data => {
      alert("Created Successfully!")
    })
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
