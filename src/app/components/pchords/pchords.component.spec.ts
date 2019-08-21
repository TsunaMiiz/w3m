import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PchordsComponent } from './pchords.component';

describe('PchordsComponent', () => {
  let component: PchordsComponent;
  let fixture: ComponentFixture<PchordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PchordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PchordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
