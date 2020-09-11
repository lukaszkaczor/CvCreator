import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesFormComponent } from './certificates-form.component';

describe('CertificatesFormComponent', () => {
  let component: CertificatesFormComponent;
  let fixture: ComponentFixture<CertificatesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
