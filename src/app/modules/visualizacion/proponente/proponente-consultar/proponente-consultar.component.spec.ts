import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProponenteConsultarComponent } from './proponente-consultar.component';

describe('ProponenteConsultarComponent', () => {
  let component: ProponenteConsultarComponent;
  let fixture: ComponentFixture<ProponenteConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProponenteConsultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
