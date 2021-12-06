import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudVisualizarComponent } from './solicitud-visualizar.component';

describe('SolicitudVisualizarComponent', () => {
  let component: SolicitudVisualizarComponent;
  let fixture: ComponentFixture<SolicitudVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
