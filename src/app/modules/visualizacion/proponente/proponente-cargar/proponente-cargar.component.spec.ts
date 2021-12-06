import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteCargarComponent } from './proponente-cargar.component';

describe('ProponenteCargarComponent', () => {
  let component: ProponenteCargarComponent;
  let fixture: ComponentFixture<ProponenteCargarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteCargarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteCargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
