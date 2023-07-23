import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render the correct HTML elements and text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('section.page-section')).toBeTruthy();
    expect(compiled.querySelector('h2').textContent).toContain("Let's Get In Touch!");
    expect(compiled.querySelector('form#contactForm')).toBeTruthy();
    expect(compiled.querySelector('label[for="name"]').textContent).toContain('Full name');
  });
  it('should have a disabled Submit button initially', () => {
    const compiled = fixture.nativeElement;
    const submitButton = compiled.querySelector('button#submitButton');
    expect(submitButton).toBeTruthy();
    expect(submitButton.disabled).toBe(false);
  });
});
