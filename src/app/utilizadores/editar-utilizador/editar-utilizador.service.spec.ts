import { TestBed, inject } from '@angular/core/testing';

import { EditarUtilizadorService } from './editar-utilizador.service';

describe('EditarUtilizadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditarUtilizadorService]
    });
  });

  it('should ...', inject([EditarUtilizadorService], (service: EditarUtilizadorService) => {
    expect(service).toBeTruthy();
  }));
});
