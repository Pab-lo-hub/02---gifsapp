import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef;

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);
    
  }
}
