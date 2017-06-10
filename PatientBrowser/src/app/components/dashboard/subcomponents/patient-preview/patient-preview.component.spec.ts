import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPreviewComponent } from './patient-preview.component';

describe('PatientPreviewComponent', () => {
  let component: PatientPreviewComponent;
  let fixture: ComponentFixture<PatientPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
