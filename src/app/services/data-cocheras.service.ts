import { Injectable } from '@angular/core';
import { iCochera } from '../Interfaces/cochera';

@Injectable({
  providedIn: 'root'
})
export class DataCocherasService {

  private apiUrl = 'http://localhost:4001';

  cocheras: iCochera[] = [];
  constructor() { }

  ultimoNumero = this.cocheras[this.cocheras.length - 1]?.numero || 0;

  cambiarEstadoCochera(indice: number) {
    if (this.cocheras[indice].disponible) {
      this.cocheras[indice].disponible = false; 
    } else {
      this.cocheras[indice].disponible = true;
      this.cocheras[indice].ingreso = ''; 
    }
  }

  borrarCochera(indice: number) {
    this.cocheras.splice(indice, 1);
  }
  
  agregarCochera() {
    this.cocheras.push({
      numero: this.ultimoNumero + 1, 
      disponible: true, 
      ingreso: '', 
      patente: ''
    });
    this.ultimoNumero++;
  }

  borrarTodas() {
    this.cocheras = [];
    this.ultimoNumero = 0;
  }
}
