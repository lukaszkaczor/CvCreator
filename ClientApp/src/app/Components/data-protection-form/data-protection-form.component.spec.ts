import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProtectionFormComponent } from './data-protection-form.component';

describe('DataProtectionFormComponent', () => {
  let component: DataProtectionFormComponent;
  let fixture: ComponentFixture<DataProtectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataProtectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProtectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
