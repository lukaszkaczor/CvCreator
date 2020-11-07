import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCvFormComponent } from './save-cv-form.component';

describe('SaveCvFormComponent', () => {
  let component: SaveCvFormComponent;
  let fixture: ComponentFixture<SaveCvFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCvFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
