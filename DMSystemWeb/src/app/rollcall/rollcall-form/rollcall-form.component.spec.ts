import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollcallFormComponent } from './rollcall-form.component';

describe('RollcallFormComponent', () => {
  let component: RollcallFormComponent;
  let fixture: ComponentFixture<RollcallFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollcallFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollcallFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
