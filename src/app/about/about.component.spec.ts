import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent} from './about.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'; 
describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [AboutComponent]
    });
    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
