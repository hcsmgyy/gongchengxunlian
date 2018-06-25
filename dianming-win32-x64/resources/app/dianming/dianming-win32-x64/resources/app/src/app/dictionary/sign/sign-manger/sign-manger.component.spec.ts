import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignMangerComponent } from './sign-manger.component';

describe('SignMangerComponent', () => {
  let component: SignMangerComponent;
  let fixture: ComponentFixture<SignMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
