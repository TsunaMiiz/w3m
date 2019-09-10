import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaokonComponent } from './kaokon.component';

describe('KaokonComponent', () => {
  let component: KaokonComponent;
  let fixture: ComponentFixture<KaokonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaokonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaokonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
