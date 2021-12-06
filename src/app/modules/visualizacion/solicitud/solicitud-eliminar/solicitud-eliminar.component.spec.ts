import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudEliminarComponent } from './solicitud-eliminar.component';

describe('SolicitudEliminarComponent', () => {
  let component: SolicitudEliminarComponent;
  let fixture: ComponentFixture<SolicitudEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
