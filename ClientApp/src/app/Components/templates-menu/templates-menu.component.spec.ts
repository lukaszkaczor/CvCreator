import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesMenuComponent } from './templates-menu.component';

describe('TemplatesMenuComponent', () => {
  let component: TemplatesMenuComponent;
  let fixture: ComponentFixture<TemplatesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
