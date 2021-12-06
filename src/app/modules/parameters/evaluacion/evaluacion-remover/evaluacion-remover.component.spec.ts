import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionRemoverComponent } from './evaluacion-remover.component';

describe('EvaluacionRemoverComponent', () => {
  let component: EvaluacionRemoverComponent;
  let fixture: ComponentFixture<EvaluacionRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluacionRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
