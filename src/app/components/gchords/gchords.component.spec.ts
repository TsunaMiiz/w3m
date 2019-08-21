import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GchordsComponent } from './gchords.component';

describe('GchordsComponent', () => {
  let component: GchordsComponent;
  let fixture: ComponentFixture<GchordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GchordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GchordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
