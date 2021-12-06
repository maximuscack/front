import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudEditarComponent } from './solicitud-editar.component';

describe('SolicitudEditarComponent', () => {
  let component: SolicitudEditarComponent;
  let fixture: ComponentFixture<SolicitudEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
