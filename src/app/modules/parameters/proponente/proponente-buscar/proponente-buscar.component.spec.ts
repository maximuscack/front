import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteBuscarComponent } from './proponente-buscar.component';

describe('ProponenteBuscarComponent', () => {
  let component: ProponenteBuscarComponent;
  let fixture: ComponentFixture<ProponenteBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
