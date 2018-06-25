import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollcallMangerComponent } from './rollcall-manger.component';

describe('RollcallMangerComponent', () => {
  let component: RollcallMangerComponent;
  let fixture: ComponentFixture<RollcallMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollcallMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollcallMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
