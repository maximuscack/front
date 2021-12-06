import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoCrearComponent } from './resultado-crear.component';

describe('ResultadoCrearComponent', () => {
  let component: ResultadoCrearComponent;
  let fixture: ComponentFixture<ResultadoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
