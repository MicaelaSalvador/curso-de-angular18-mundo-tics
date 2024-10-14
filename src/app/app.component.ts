import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './comunicacion/padre/padre.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-angular';
}
