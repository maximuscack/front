import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteEliminarComponent } from './proponente-eliminar.component';

describe('ProponenteEliminarComponent', () => {
  let component: ProponenteEliminarComponent;
  let fixture: ComponentFixture<ProponenteEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
