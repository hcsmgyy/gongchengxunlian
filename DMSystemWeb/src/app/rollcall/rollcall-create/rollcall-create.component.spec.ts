import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollcallCreateComponent } from './rollcall-create.component';

describe('RollcallCreateComponent', () => {
  let component: RollcallCreateComponent;
  let fixture: ComponentFixture<RollcallCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollcallCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollcallCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
