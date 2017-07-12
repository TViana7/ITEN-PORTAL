import { TestBed, inject } from '@angular/core/testing';

import { EditarPasswordService } from './editar-password.service';

describe('EditarPasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditarPasswordService]
    });
  });

  it('should ...', inject([EditarPasswordService], (service: EditarPasswordService) => {
    expect(service).toBeTruthy();
  }));
});
