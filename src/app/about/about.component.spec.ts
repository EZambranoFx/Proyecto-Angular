import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent} from './about.component';

import { HttpClientModule } from '@angular/common/http';


describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AboutComponent]
    });
    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
