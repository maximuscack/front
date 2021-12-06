import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoBuscarComponent } from './departamento-buscar.component';

describe('DepartamentoBuscarComponent', () => {
  let component: DepartamentoBuscarComponent;
  let fixture: ComponentFixture<DepartamentoBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
