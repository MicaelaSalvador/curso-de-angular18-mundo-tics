import { Component } from '@angular/core';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.scss'
})
export class PropiedadesComponent {

  estaDeshabilitado =false;
  esEditable = true;

  mensaje="";

  over(){
    alert('Mouse over');
  }

  mousedown(){
    this.mensaje="mouse presionado";
  }

}
