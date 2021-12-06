import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudConsultarComponent } from './solicitud-consultar.component';

describe('SolicitudConsultarComponent', () => {
  let component: SolicitudConsultarComponent;
  let fixture: ComponentFixture<SolicitudConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
