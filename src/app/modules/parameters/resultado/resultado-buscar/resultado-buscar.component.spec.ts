import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBuscarComponent } from './resultado-buscar.component';

describe('ResultadoBuscarComponent', () => {
  let component: ResultadoBuscarComponent;
  let fixture: ComponentFixture<ResultadoBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
