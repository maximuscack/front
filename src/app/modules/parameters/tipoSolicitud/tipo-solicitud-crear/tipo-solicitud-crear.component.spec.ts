import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSolicitudCrearComponent } from './tipo-solicitud-crear.component';

describe('TipoSolicitudCrearComponent', () => {
  let component: TipoSolicitudCrearComponent;
  let fixture: ComponentFixture<TipoSolicitudCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSolicitudCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSolicitudCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
