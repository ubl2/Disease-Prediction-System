import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDiseasesComponent } from './admin-diseases.component';

describe('AdminDiseasesComponent', () => {
  let component: AdminDiseasesComponent;
  let fixture: ComponentFixture<AdminDiseasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDiseasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
