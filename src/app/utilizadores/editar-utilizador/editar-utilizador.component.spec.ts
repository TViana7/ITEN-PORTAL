import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUtilizadorComponent } from './editar-utilizador.component';

describe('EditarUtilizadorComponent', () => {
  let component: EditarUtilizadorComponent;
  let fixture: ComponentFixture<EditarUtilizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarUtilizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUtilizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
