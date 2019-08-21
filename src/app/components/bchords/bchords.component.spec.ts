import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BchordsComponent } from './bchords.component';

describe('BchordsComponent', () => {
  let component: BchordsComponent;
  let fixture: ComponentFixture<BchordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BchordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BchordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
