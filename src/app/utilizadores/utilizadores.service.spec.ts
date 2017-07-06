import { TestBed, inject } from '@angular/core/testing';

import { UtilizadoresService } from './utilizadores.service';

describe('UtilizadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilizadoresService]
    });
  });

  it('should ...', inject([UtilizadoresService], (service: UtilizadoresService) => {
    expect(service).toBeTruthy();
  }));
});
