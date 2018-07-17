import { TestBed, inject } from '@angular/core/testing';

import { ListBookService } from './list-book.service';

describe('ListBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListBookService]
    });
  });

  it('should be created', inject([ListBookService], (service: ListBookService) => {
    expect(service).toBeTruthy();
  }));
});
