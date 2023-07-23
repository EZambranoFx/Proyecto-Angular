import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioComponent]
    });
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render the correct portfolio elements and attributes', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div#portfolio')).toBeTruthy();

    const portfolioBoxes = compiled.querySelectorAll('a.portfolio-box');
    expect(portfolioBoxes.length).toBe(6);

    // Test the attributes of each portfolio box
    const portfolioBox1 = portfolioBoxes[0];
    expect(portfolioBox1.getAttribute('href')).toContain('assets/img/portfolio/fullsize/1.jpg');
    expect(portfolioBox1.getAttribute('title')).toContain('Project Name');
    expect(portfolioBox1.querySelector('img.img-fluid')).toBeTruthy();
    expect(portfolioBox1.querySelector('div.project-category.text-white-50').textContent).toContain('Category');
    expect(portfolioBox1.querySelector('div.project-name').textContent).toContain('Project Name');
  });
});
