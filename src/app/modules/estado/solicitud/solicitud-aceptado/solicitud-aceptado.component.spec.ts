import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAceptadoComponent } from './solicitud-aceptado.component';

describe('SolicitudAceptadoComponent', () => {
  let component: SolicitudAceptadoComponent;
  let fixture: ComponentFixture<SolicitudAceptadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudAceptadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudAceptadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
