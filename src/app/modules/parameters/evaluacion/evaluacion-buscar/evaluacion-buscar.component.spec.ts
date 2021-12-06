import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionBuscarComponent } from './evaluacion-buscar.component';

describe('EvaluacionBuscarComponent', () => {
  let component: EvaluacionBuscarComponent;
  let fixture: ComponentFixture<EvaluacionBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
