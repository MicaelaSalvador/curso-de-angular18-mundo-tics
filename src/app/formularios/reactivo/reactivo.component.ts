import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactivo.component.html',
  styleUrl: './reactivo.component.scss'
})
export class ReactivoComponent {
  
  usuarioForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    direccion :new FormGroup({
      ciudad: new FormControl(''),
      departamento: new FormControl(''),
    })
  });


  // constructor(private fb: FormBuilder) { }

  // usuarioForm = this.fb.group({
  //   nombre:[''],
  //   apellido:[''],
  //   direccion: this.formBuilder.group({
  //     ciudad:[''],
  //     departamento:['']
  //   })
  // });


  guardar(){
    console.log(this.usuarioForm)
    console.log(this.usuarioForm.value);
  }

  actualizar(){
    // this.usuarioForm.setValue({
    //   nombre: 'Laura',
    // apellido:'Torres',
    // direccion :({
    //   ciudad:'Morelia',
    //   departamento:'Morleia 19',
    // })
    // });
  
    this.usuarioForm.patchValue({
      nombre: 'Laura',
    });

  }

}
