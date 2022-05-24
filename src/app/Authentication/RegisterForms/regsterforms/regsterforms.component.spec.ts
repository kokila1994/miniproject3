import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsterformsComponent } from './regsterforms.component';

describe('RegsterformsComponent', () => {
  let component: RegsterformsComponent;
  let fixture: ComponentFixture<RegsterformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegsterformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsterformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
