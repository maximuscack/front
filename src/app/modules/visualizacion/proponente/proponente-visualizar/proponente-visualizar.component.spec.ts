import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteVisualizarComponent } from './proponente-visualizar.component';

describe('ProponenteVisualizarComponent', () => {
  let component: ProponenteVisualizarComponent;
  let fixture: ComponentFixture<ProponenteVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteVisualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
