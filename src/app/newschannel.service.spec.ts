import { TestBed } from '@angular/core/testing';

import { NewschannelService } from './newschannel.service';

describe('NewschannelService', () => {
  let service: NewschannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewschannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
