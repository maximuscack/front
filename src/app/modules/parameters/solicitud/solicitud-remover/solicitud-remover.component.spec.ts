import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudRemoverComponent } from './solicitud-remover.component';

describe('SolicitudRemoverComponent', () => {
  let component: SolicitudRemoverComponent;
  let fixture: ComponentFixture<SolicitudRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
