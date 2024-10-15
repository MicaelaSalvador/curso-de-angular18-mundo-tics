import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segundo',
  standalone: true,
  imports: [],
  templateUrl: './segundo.component.html',
  styleUrl: './segundo.component.scss'
})

export class SegundoComponent {

  router:ActivatedRoute= inject(ActivatedRoute);

id=0;
code=0;

constructor(){
  this.id=this.router.snapshot.params['id'];
  this.code=this.router.snapshot.params['code'];
}

}
