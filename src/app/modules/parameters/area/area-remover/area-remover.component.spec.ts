import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaRemoverComponent } from './area-remover.component';

describe('AreaRemoverComponent', () => {
  let component: AreaRemoverComponent;
  let fixture: ComponentFixture<AreaRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaRemoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
