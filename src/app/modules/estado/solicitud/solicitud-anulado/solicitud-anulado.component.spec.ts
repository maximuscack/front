import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAnuladoComponent } from './solicitud-anulado.component';

describe('SolicitudAnuladoComponent', () => {
  let component: SolicitudAnuladoComponent;
  let fixture: ComponentFixture<SolicitudAnuladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudAnuladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAnuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
