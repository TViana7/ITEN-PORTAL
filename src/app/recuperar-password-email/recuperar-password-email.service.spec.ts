import { TestBed, inject } from '@angular/core/testing';

import { RecuperarPasswordEmailService } from './recuperar-password-email.service';

describe('RecuperarPasswordEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecuperarPasswordEmailService]
    });
  });

  it('should ...', inject([RecuperarPasswordEmailService], (service: RecuperarPasswordEmailService) => {
    expect(service).toBeTruthy();
  }));
});
