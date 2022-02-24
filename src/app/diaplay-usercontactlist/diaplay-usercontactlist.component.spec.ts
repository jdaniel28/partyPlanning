import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaplayUsercontactlistComponent } from './diaplay-usercontactlist.component';

describe('DiaplayUsercontactlistComponent', () => {
  let component: DiaplayUsercontactlistComponent;
  let fixture: ComponentFixture<DiaplayUsercontactlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaplayUsercontactlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaplayUsercontactlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
