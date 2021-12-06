import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSolicitudEditarComponent } from './tipo-solicitud-editar.component';

describe('TipoSolicitudEditarComponent', () => {
  let component: TipoSolicitudEditarComponent;
  let fixture: ComponentFixture<TipoSolicitudEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSolicitudEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSolicitudEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
