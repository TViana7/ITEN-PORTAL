import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendaDatalheComponent } from './encomenda-datalhe.component';

describe('EncomendaDatalheComponent', () => {
  let component: EncomendaDatalheComponent;
  let fixture: ComponentFixture<EncomendaDatalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendaDatalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomendaDatalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
