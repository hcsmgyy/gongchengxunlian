import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonMangerComponent } from './lesson-manger.component';

describe('LessonMangerComponent', () => {
  let component: LessonMangerComponent;
  let fixture: ComponentFixture<LessonMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
