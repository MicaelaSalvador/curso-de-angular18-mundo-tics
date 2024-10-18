import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ResaltarDirective } from '../resaltar.directive';

@Component({
  selector: 'app-directiva',
  standalone: true,
  imports: [CommonModule,ResaltarDirective],
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.scss'
})
export class DirectivaComponent implements OnInit {
color='cyan';

  esActivo= true;


  estilos:Record<string,string>={}
  
  ngOnInit(): void {
   this.estilos={
    "color":this.esActivo?'green':'red',
    'font-size':this.esActivo?'20px':'30px'
   };
  }
  

}
