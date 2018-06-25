import { TestBed, inject } from '@angular/core/testing';

import { RollcallService } from './rollcall.service';

describe('RollcallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollcallService]
    });
  });

  it('should be created', inject([RollcallService], (service: RollcallService) => {
    expect(service).toBeTruthy();
  }));
});
