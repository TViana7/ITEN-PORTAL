import { TestBed, inject } from '@angular/core/testing';

import { EditarUserService } from './editar-user.service';

describe('EditarUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditarUserService]
    });
  });

  it('should ...', inject([EditarUserService], (service: EditarUserService) => {
    expect(service).toBeTruthy();
  }));
});
