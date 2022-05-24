import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childoftemplet1Component } from './childoftemplet1.component';

describe('Childoftemplet1Component', () => {
  let component: Childoftemplet1Component;
  let fixture: ComponentFixture<Childoftemplet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childoftemplet1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childoftemplet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
