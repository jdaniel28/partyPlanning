import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInviteesComponent } from './view-invitees.component';

describe('ViewInviteesComponent', () => {
  let component: ViewInviteesComponent;
  let fixture: ComponentFixture<ViewInviteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInviteesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInviteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
