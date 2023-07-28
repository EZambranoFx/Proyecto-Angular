import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  URL = 'https://pokeapi.co/api/v2/pokemon/';
  searchedPokemon = '';
  pokemonData: any;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  async searchPokemon() {
    try {
      // Realizar una petición a la API de PokeAPI con el nombre del Pokémon
      const response = await this.http.get(this.URL + this.searchedPokemon.toLowerCase()).toPromise();

      // Mostrar los datos del Pokémon en el contenedor de resultados
      this.pokemonData = response;
      this.errorMessage = '';
    } catch (error) {
      // Si ocurre algún error durante la petición, mostrar un mensaje de error
      this.errorMessage = `No se encontró ningún Pokémon llamado "${this.searchedPokemon}"`;
      this.pokemonData = null;
      console.error(error);
    }
  }
}

