import { TestBed, inject } from '@angular/core/testing';

import { CriarUtilizadorService } from './criar-utilizador.service';

describe('CriarUtilizadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CriarUtilizadorService]
    });
  });

  it('should ...', inject([CriarUtilizadorService], (service: CriarUtilizadorService) => {
    expect(service).toBeTruthy();
  }));
});
