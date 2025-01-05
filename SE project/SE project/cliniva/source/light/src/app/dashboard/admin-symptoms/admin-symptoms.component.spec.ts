import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSymptomsComponent } from './admin-symptoms.component';

describe('AdminSymptomsComponent', () => {
  let component: AdminSymptomsComponent;
  let fixture: ComponentFixture<AdminSymptomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSymptomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
