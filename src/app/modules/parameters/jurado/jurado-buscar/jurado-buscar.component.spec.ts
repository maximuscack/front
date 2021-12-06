import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoBuscarComponent } from './jurado-buscar.component';

describe('JuradoBuscarComponent', () => {
  let component: JuradoBuscarComponent;
  let fixture: ComponentFixture<JuradoBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradoBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
