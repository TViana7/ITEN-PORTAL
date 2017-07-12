import { TestBed, inject } from '@angular/core/testing';

import { RecuperarPasswordService } from './recuperar-password.service';

describe('RecuperarPasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecuperarPasswordService]
    });
  });

  it('should ...', inject([RecuperarPasswordService], (service: RecuperarPasswordService) => {
    expect(service).toBeTruthy();
  }));
});
