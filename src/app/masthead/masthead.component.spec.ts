import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastheadComponent } from './masthead.component';

describe('MastheadComponent', () => {
  let component: MastheadComponent;
  let fixture: ComponentFixture<MastheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MastheadComponent]
    });
    fixture = TestBed.createComponent(MastheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render the correct header elements and text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('header.masthead')).toBeTruthy();
    expect(compiled.querySelector('h1.text-white.font-weight-bold')).toBeTruthy();
    expect(compiled.querySelector('h1.text-white.font-weight-bold').textContent).toContain('Your Favorite Place for Free Bootstrap Themes');
    expect(compiled.querySelector('p.text-white-75.mb-5')).toBeTruthy();
    expect(compiled.querySelector('p.text-white-75.mb-5').textContent).toContain('Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!');
    expect(compiled.querySelector('a.btn.btn-primary.btn-xl')).toBeTruthy();
    expect(compiled.querySelector('a.btn.btn-primary.btn-xl').textContent).toContain('Find Out More');
  });
});
