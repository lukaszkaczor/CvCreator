import { TestBed } from '@angular/core/testing';

import { HtmlTemplateService } from './html-template.service';

describe('HtmlTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtmlTemplateService = TestBed.get(HtmlTemplateService);
    expect(service).toBeTruthy();
  });
});
