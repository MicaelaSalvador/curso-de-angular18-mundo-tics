import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DemoPipe } from '../demo.pipe';
import { ProfesionPipe } from '../profesion.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe,DatePipe,CurrencyPipe,DemoPipe,CommonModule, ProfesionPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {

  mensaje = "texto de prueba";
  fecha= new Date();
  decimal=2500.5;

  lista=[{nombre:'Juan',idProfesion:1},{nombre:'Carlos',idProfesion:2},{nombre:'Pedro',idProfesion:1}]

  profesiones = [{idProfesion:1,profesion:'Ingeniero'},{idProfesion:2,profesion:'Arquitecto'}]
}
