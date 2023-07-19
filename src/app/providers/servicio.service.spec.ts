import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ServicioService } from './servicio.service';
import { Interfaz } from '../interfaces/interfaz';

describe('ServicioService', () => {
  let service: ServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule],
      providers: [ServicioService]
    });
    service = TestBed.inject(ServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getResponse should return value from observable', (done: DoneFn) => {
      service.getResponse().subscribe(data => {
        expect((data as Interfaz[]).length).toBeGreaterThan(0)
        done();
      });
    });


});
