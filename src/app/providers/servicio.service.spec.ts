import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServicioService } from './servicio.service';

describe('ServicioService', () => {
  let service: ServicioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
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
    const responseData = { /* Coloca aquí los datos de respuesta esperados */ };

    service.getResponse().subscribe((data) => {
      expect(data).toEqual(responseData);
    });

    const httpRequest = httpMock.expectOne('');
    httpRequest.flush(responseData);
  });


});
