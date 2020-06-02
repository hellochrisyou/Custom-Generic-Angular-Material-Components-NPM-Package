import { TestBed } from '@angular/core/testing';

import { NgxMatReactiveFormService } from '../ngx-mat.service';

describe('NgxMatReactiveFormService', () => {
  let service: NgxMatReactiveFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatReactiveFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
