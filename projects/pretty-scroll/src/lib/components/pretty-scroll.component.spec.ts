import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyScrollComponent } from './pretty-scroll.component';

describe('PrettyScrollComponent', () => {
  let component: PrettyScrollComponent;
  let fixture: ComponentFixture<PrettyScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrettyScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettyScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
