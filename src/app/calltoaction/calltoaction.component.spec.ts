import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalltoactionComponent } from './calltoaction.component';

describe('CalltoactionComponent', () => {
  let component: CalltoactionComponent;
  let fixture: ComponentFixture<CalltoactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalltoactionComponent]
    });
    fixture = TestBed.createComponent(CalltoactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain the correct HTML elements and text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('section.page-section')).toBeTruthy();
    expect(compiled.querySelector('h2').textContent).toContain('Free Download at Start Bootstrap!');
    expect(compiled.querySelector('a.btn.btn-light.btn-xl').textContent).toContain('Download Now!');
  });
  it('should have the correct link', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a.btn.btn-light.btn-xl').getAttribute('href')).toBe(
      'https://startbootstrap.com/theme/creative/'
    );
  });
});
