import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMangerComponent } from './question-manger.component';

describe('QuestionMangerComponent', () => {
  let component: QuestionMangerComponent;
  let fixture: ComponentFixture<QuestionMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
