import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render the correct copyright text', () => {
    const compiled = fixture.nativeElement;
    const copyrightText = compiled.querySelector('div.small.text-center.text-muted');
    expect(copyrightText).toBeTruthy();
    expect(copyrightText.textContent).toContain('Copyright © 2023 - Company Name');
  });
});
