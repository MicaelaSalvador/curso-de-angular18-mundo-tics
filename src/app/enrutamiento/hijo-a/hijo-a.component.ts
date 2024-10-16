import { Component } from '@angular/core';
import { PlantillaComponent } from '../../formularios/plantilla/plantilla.component';

@Component({
  selector: 'app-hijo-a',
  standalone: true,
  imports: [PlantillaComponent],
  templateUrl: './hijo-a.component.html',
  styleUrl: './hijo-a.component.scss'
})
export class HijoAComponent {

}
