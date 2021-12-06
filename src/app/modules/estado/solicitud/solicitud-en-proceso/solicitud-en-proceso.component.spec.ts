import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudEnProcesoComponent } from './solicitud-en-proceso.component';

describe('SolicitudEnProcesoComponent', () => {
  let component: SolicitudEnProcesoComponent;
  let fixture: ComponentFixture<SolicitudEnProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudEnProcesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudEnProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
