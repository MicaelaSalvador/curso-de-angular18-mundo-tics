import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  usuarios = ['Juan','Carlos','Pedro'];

  obtenerUsuarios(){
    return this.usuarios;
  }
}
