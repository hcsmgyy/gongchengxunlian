import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMangerComponent } from './role-manger.component';

describe('RoleMangerComponent', () => {
  let component: RoleMangerComponent;
  let fixture: ComponentFixture<RoleMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
