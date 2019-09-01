import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pf1Component } from './pf1.component';

describe('Pf1Component', () => {
  let component: Pf1Component;
  let fixture: ComponentFixture<Pf1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pf1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
