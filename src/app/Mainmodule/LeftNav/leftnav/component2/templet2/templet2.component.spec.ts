import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templet2Component } from './templet2.component';

describe('Templet2Component', () => {
  let component: Templet2Component;
  let fixture: ComponentFixture<Templet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Templet2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Templet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
