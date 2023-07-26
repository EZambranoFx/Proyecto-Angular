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
    expect(titleElement.textContent.trim()).toBe('Encuentra toda la información relacionada a tus Pókemon favoritos en un solo lugar');
  });

  it('should have the correct description', () => {
    const descriptionElement = fixture.nativeElement.querySelector('p');
    expect(descriptionElement.textContent.trim()).toBe('El sitio ideal que te otorga información recopilada sobre las especies Pokémon. Encuentra todo lo relacionado con los movimientos, habilidades y más información acorde a la PokéDex.');
  });

  it('should have a link to services section', () => {
    const linkElement = fixture.nativeElement.querySelector('a');
    expect(linkElement.getAttribute('href')).toBe('#services');
  });

  it('should have the correct link text', () => {
    const linkElement = fixture.nativeElement.querySelector('a');
    expect(linkElement.textContent.trim()).toBe('Descubre más');
  });

});
