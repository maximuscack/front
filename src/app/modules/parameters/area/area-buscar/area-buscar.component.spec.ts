import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaBuscarComponent } from './area-buscar.component';

describe('AreaBuscarComponent', () => {
  let component: AreaBuscarComponent;
  let fixture: ComponentFixture<AreaBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
