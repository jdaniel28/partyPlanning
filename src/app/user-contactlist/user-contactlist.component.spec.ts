import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactlistComponent } from './user-contactlist.component';

describe('UserContactlistComponent', () => {
  let component: UserContactlistComponent;
  let fixture: ComponentFixture<UserContactlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserContactlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
