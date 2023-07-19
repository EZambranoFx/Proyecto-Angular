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
  it('should display the correct heading', () => {
    const headingElement = document.querySelector('h2');
    expect(headingElement?.textContent).toBe("We've got what you need!");
  });
  it('should display the correct description', () => {
    const descriptionElement = document.querySelector('p');
    expect(descriptionElement?.textContent).toContain("Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!");
  });

  it('should display the "Get Started" button', () => {
    const getStartedButton = document.querySelector('a.btn') as HTMLAnchorElement;
    expect(getStartedButton).toBeTruthy();
    expect(getStartedButton.href).toContain('#services');
    expect(getStartedButton?.textContent).toBe('Get Started!');
  });
});
