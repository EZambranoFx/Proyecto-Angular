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

  it('should have the correct title', () => {
    const titleElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent.trim()).toBe('Descubre todo sobre tus Pokémons favoritos en un mismo sitio');
  });

  it('should have the correct description', () => {
    const descriptionElement = fixture.nativeElement.querySelector('p');
    expect(descriptionElement.textContent.trim()).toBe('Consulta y conoce los detalles de los Pokémons disponibles dentro de la Pokédex');
  });

  it('should have a link to services section', () => {
    const linkElement = fixture.nativeElement.querySelector('a');
    expect(linkElement.getAttribute('href')).toBe('#services');
  });

  it('should have the correct link text', () => {
    const linkElement = fixture.nativeElement.querySelector('a');
    expect(linkElement.textContent.trim()).toBe('ver Pokédex');
  });

});
