import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CijenovnikComponent } from './cijenovnik.component';

describe('CijenovnikComponent', () => {
  let component: CijenovnikComponent;
  let fixture: ComponentFixture<CijenovnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CijenovnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CijenovnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
