import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KebrukComponent } from './kebruk.component';

describe('KebrukComponent', () => {
  let component: KebrukComponent;
  let fixture: ComponentFixture<KebrukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KebrukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KebrukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
