import { Component } from '@angular/core';
//Importación de la interfaz
import { Interfaz } from '../interfaces/interfaz';

//Importación del servicio
import { ServicioService } from '../providers/servicio.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  //Atributo con el tipo de dato de la interfaz
  public data: Interfaz[] = [];
  //Inyección de dependencia del servicio
  constructor(private dataProvider: ServicioService) { }
  //Ejecución de la petición y suscripción de la respuesta
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as Interfaz[]);
    })
  }
}
