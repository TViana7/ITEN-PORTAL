import { TestBed, inject } from '@angular/core/testing';

import { CriarPerfilService } from './criar-perfil.service';

describe('CriarPerfilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CriarPerfilService]
    });
  });

  it('should ...', inject([CriarPerfilService], (service: CriarPerfilService) => {
    expect(service).toBeTruthy();
  }));
});
