import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoEditarComponent } from './resultado-editar.component';

describe('ResultadoEditarComponent', () => {
  let component: ResultadoEditarComponent;
  let fixture: ComponentFixture<ResultadoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
