import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor() { }

  public gfgone = false;
  public gfgtwo = false;
  public gfgthree = false;

  ngOnInit(): void {
  }

}
