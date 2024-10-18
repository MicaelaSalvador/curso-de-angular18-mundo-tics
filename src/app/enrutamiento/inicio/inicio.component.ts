import { Component, inject } from '@angular/core';
import {Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  listar ="";

  constructor(private router: Router,private usuarioService: UsuarioService){

    console.log('Environments',environment.produccion);
  this.listar = this.usuarioService.obtenerUsuarios().join(',');
  }
  
  // usuarioService = inject(UsuarioService);
 
  iraPrimero(){
this.router.navigate(['primero'])
  }
  iraSegundo(){
this.router.navigate(['segundo',40,60])
  }

}
