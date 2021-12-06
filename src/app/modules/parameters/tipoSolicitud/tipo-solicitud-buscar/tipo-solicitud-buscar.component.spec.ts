import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSolicitudBuscarComponent } from './tipo-solicitud-buscar.component';

describe('TipoSolicitudBuscarComponent', () => {
  let component: TipoSolicitudBuscarComponent;
  let fixture: ComponentFixture<TipoSolicitudBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSolicitudBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSolicitudBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
