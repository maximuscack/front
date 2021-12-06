import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSolicitudRemoverComponent } from './tipo-solicitud-remover.component';

describe('TipoSolicitudRemoverComponent', () => {
  let component: TipoSolicitudRemoverComponent;
  let fixture: ComponentFixture<TipoSolicitudRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSolicitudRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSolicitudRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
