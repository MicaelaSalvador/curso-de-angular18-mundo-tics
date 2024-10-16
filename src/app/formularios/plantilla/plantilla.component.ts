import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Programador } from '../programador';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plantilla',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.scss'
})
export class PlantillaComponent {

 programador = new Programador();
 especialidades = ['front-end','back-end','ambos'];

 enviado = false;


 enviar(){
  this.enviado=true
 }

}
