import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  //   data y manejo de data se debe hacer en los archivos de servicios
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 8500,
    },
    {
      nombre: 'Krillin',
      poder: 700,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {}

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
