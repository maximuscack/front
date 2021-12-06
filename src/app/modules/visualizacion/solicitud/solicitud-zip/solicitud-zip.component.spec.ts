import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudZipComponent } from './solicitud-zip.component';

describe('SolicitudZipComponent', () => {
  let component: SolicitudZipComponent;
  let fixture: ComponentFixture<SolicitudZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudZipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
