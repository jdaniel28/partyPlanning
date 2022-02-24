import { TestBed } from '@angular/core/testing';

import { InviteeService } from './invitee.service';

describe('InviteeService', () => {
  let service: InviteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InviteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
