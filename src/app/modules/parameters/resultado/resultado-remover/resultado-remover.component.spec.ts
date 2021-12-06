import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoRemoverComponent } from './resultado-remover.component';

describe('ResultadoRemoverComponent', () => {
  let component: ResultadoRemoverComponent;
  let fixture: ComponentFixture<ResultadoRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
