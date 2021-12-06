import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadBuscarComponent } from './facultad-buscar.component';

describe('FacultadBuscarComponent', () => {
  let component: FacultadBuscarComponent;
  let fixture: ComponentFixture<FacultadBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultadBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
