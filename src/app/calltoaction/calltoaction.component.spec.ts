import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalltoactionComponent } from './calltoaction.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

describe('CalltoactionComponent', () => {
  let component: CalltoactionComponent;
  let fixture: ComponentFixture<CalltoactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CanvasJSAngularChartsModule
      ],
      declarations: [CalltoactionComponent]
    });
    fixture = TestBed.createComponent(CalltoactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have the correct link', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a.btn.btn-light.btn-xl').getAttribute('href')).toBe(
      'https://scarletviolet.pokemon.com/es-es/'
    );
  });
});
