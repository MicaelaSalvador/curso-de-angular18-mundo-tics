import { provideRouter } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profesion',
  standalone: true
})
export class ProfesionPipe implements PipeTransform {

  transform(value:number, listaProfesiones:any[]): string {
    console.log(listaProfesiones);
    console.log('value',value);

     let respuesta="";

    listaProfesiones.forEach(profesion => {
     if(profesion.idProfesion == value){
      respuesta = profesion.profesion;
     }
    });
    return respuesta;
  }

}
