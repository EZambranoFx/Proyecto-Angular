import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponent } from './services.component';
import { ServicioService } from '../providers/servicio.service';

import { HttpClientModule } from '@angular/common/http';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ServicesComponent],
      providers: [ServicioService],
    });
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should request service user after Angular calls ngOnInit', (done: DoneFn) => {
    // Llame a ngOnInit para simular el ciclo de vida del componente
    component.ngOnInit();

    // Utilice fixture.whenStable para esperar a que se resuelva el observable del servicio
    fixture.whenStable().then(() => {
      // Valide que la respuesta sea mayor que 0
      expect(component.data.length).toBeGreaterThan(0);

      // Que espere hasta que llegue la respuesta
      done();
    });
  });
});
