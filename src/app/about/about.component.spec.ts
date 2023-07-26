import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent]
    });
    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
  it('should have the correct title', () => {
    const titleElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement.textContent).toContain('Encuentra tu Pókemon');
  });

  it('should have the correct description', () => {
    const descriptionElement = fixture.nativeElement.querySelector('p');
    expect(descriptionElement.textContent).toContain('Busca un Pókemon por su nombre o con su número de la Pokédex Nacional.');
  });

  it('should have a link to services section', () => {
    const linkElement = fixture.nativeElement.querySelector('a');
    expect(linkElement.getAttribute('href')).toBe('#services');
  });

  it('should have the correct link text', () => {
    const linkElement = fixture.nativeElement.querySelector('a');
    expect(linkElement.textContent).toContain('¡Empieza ahora!');
  });
});
