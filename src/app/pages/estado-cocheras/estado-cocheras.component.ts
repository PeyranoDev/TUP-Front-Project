import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { iCochera } from '../../Interfaces/cochera';
import Swal from 'sweetalert2';
import { DataCocherasService } from '../../services/data-cocheras.service';

@Component({
  selector: 'app-estado-cocheras',
  standalone: true,
  imports: [RouterModule, FormsModule, ], 
  templateUrl: './estado-cocheras.component.html',
  styleUrl: './estado-cocheras.component.scss'
  
})

export class EstadoCocherasComponent {
  titulo = 'Estado cocheras';

  dataCocheraService = inject(DataCocherasService);

  cocheras: iCochera[] = [];

  constructor() {
    this.cocheras = this.dataCocheraService.cocheras;
  }

  cambiarEstadoCochera(indice: number) {
   this.dataCocheraService.cambiarEstadoCochera(indice);
  }

  borrarCochera(indice: number) {
    this.dataCocheraService.borrarCochera(indice);
  }
  
  agregarCochera() {
    this.dataCocheraService.agregarCochera();
  }


  preguntarBorrarCochera(indice: number) {
    Swal.fire({
      title: "Estas seguro de que quieres borrar la cochera?",
      showDenyButton: true, 
      confirmButtonText: "Aceptar",
      denyButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cochera borrada!", "", "success");
        this.borrarCochera(indice);
      } else if (result.isDenied) {
        Swal.fire("Se ha cancelado la accion", "", "info");
      }
    });
  }
}
