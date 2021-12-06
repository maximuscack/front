import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCargarComponent } from './solicitud-cargar.component';

describe('SolicitudCargarComponent', () => {
  let component: SolicitudCargarComponent;
  let fixture: ComponentFixture<SolicitudCargarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudCargarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudCargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
