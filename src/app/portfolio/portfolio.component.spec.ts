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
  it('should have portfolio items', () => {
    const portfolioItems = fixture.nativeElement.querySelectorAll('.portfolio-box');
    expect(portfolioItems.length).toBe(6); 
  });

  it('should have correct image sources', () => {
    const imgElements = fixture.nativeElement.querySelectorAll('img.img-fluid');
    expect(imgElements.length).toBe(6); 
  });

  it('should have correct project categories and names', () => {
    const projectCategories = fixture.nativeElement.querySelectorAll('.project-category');
    const projectNames = fixture.nativeElement.querySelectorAll('.project-name');
  });
});
