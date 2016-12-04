import { Component, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  Formulario: FormGroup;
  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.Formulario = fb.group({
      nombre: ['Nombre',Validators.required],
      usrname:['Nombre de Usuario',Validators.required],
      email: ['Correo',[Validators.required,
        Validators.pattern(
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]
      ],
      tel:['',[Validators.required,Validators.minLength(6)]]
    });
    this.Formulario.valueChanges.subscribe(
      (data:any)=>this.RevisarTelefono(data.tel)
    );
  }
  Enviar(){
    console.log(this.Formulario)
  }
  RevisarTelefono(valIn:string){
    try {
       if(parseInt(valIn)>=0 && parseInt(valIn)<10){
         console.log(valIn);
       }
    } catch (error) {
        console.log(error);
    }    
  }
  
}
