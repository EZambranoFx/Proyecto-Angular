import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponent } from './services.component';

import { By } from '@angular/platform-browser';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;
  let dataRows: HTMLElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesComponent]
    });
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dataRows = fixture.debugElement.queryAll(By.css('tr'))
    .map((debugElement) => debugElement.nativeElement);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('h2 element', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('h2')!;
    expect(p.textContent).toEqual('banner works!');
   });

   it('should display the correct number of rows', () => {
    // Restar 1 para excluir la fila de encabezado
    expect(dataRows.length - 1).toBe(component.data.length);
  });
  it('should display the correct data', () => {
    const dataValues = dataRows.slice(1) // Excluir la fila de encabezado
      .map((row) => Array.from(row.children).map((cell) => cell.textContent?.trim()));
  
    const expectedDataValues = component.data.map((datum) => [
      String(datum.id),
      datum.name,
      datum.num
    ]);
  
    expect(dataValues).toEqual(expectedDataValues);
  });
});
