import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorMangerComponent } from './major-manger.component';

describe('MajorMangerComponent', () => {
  let component: MajorMangerComponent;
  let fixture: ComponentFixture<MajorMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
