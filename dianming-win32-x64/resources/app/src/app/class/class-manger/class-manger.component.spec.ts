import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassMangerComponent } from './class-manger.component';

describe('ClassMangerComponent', () => {
  let component: ClassMangerComponent;
  let fixture: ComponentFixture<ClassMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
