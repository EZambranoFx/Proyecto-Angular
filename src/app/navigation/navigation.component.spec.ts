import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent]
    });
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render the correct navigation elements and links', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('nav.navbar.navbar-expand-lg.navbar-light.fixed-top.py-3')).toBeTruthy();
    expect(compiled.querySelector('a.navbar-brand').textContent).toContain('Start Bootstrap');
    
    const navLinks = compiled.querySelectorAll('ul.navbar-nav.ms-auto.my-2.my-lg-0 li.nav-item a.nav-link');
    expect(navLinks.length).toBe(4);
    expect(navLinks[0].textContent).toContain('About');
    expect(navLinks[1].textContent).toContain('Services');
    expect(navLinks[2].textContent).toContain('Portfolio');
    expect(navLinks[3].textContent).toContain('Contact');
  });
});
