import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarPasswordEmailComponent } from './recuperar-password-email.component';

describe('RecuperarPasswordEmailComponent', () => {
  let component: RecuperarPasswordEmailComponent;
  let fixture: ComponentFixture<RecuperarPasswordEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarPasswordEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarPasswordEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
