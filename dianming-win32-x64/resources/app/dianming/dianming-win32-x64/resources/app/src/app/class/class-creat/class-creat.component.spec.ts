import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCreatComponent } from './class-creat.component';

describe('ClassCreatComponent', () => {
  let component: ClassCreatComponent;
  let fixture: ComponentFixture<ClassCreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassCreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
