import { TestBed, inject } from '@angular/core/testing';

import { RegisterBookService } from './register-book.service';

describe('RegisterBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterBookService]
    });
  });

  it('should be created', inject([RegisterBookService], (service: RegisterBookService) => {
    expect(service).toBeTruthy();
  }));
});
