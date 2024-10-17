import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo',
  standalone: true
})
export class DemoPipe implements PipeTransform {

  transform(valor:string): string{
    return valor + ' desde pipe demo ';
  }

}
