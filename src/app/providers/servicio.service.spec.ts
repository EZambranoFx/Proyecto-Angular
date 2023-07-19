import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServicioService } from './servicio.service';
import { Interfaz } from '../interfaces/interfaz';

describe('ServicioService', () => {
  let service: ServicioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [ServicioService]
    });
    service = TestBed.inject(ServicioService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request to the correct URL', () => {
    const expectedURL = 'https://pokedex-7b07d-default-rtdb.firebaseio.com/collection.json';

    service.getResponse().subscribe();

    const httpRequest = httpMock.expectOne(expectedURL);
    expect(httpRequest.request.method).toBe('GET');
  });

  it('should return the response data', () => {
    const responseData = [
      { id: 1, name: 'Pikachu', num: '025' },
      { id: 2, name: 'Charizard', num: '006' },
      { id: 3, name: 'Bulbasaur', num: '001' },
    ];

    service.getResponse().subscribe((data) => {
      expect(data).toEqual(responseData);
    });

    const httpRequest = httpMock.expectOne('');
    httpRequest.flush(responseData);
  });
  it('getResponse should return value from observable',
      (done: DoneFn) => {
      service.getResponse().subscribe(data => {
        expect((data as Interfaz[]).length).toBeGreaterThan(0)
        done();
      });
    });


});
