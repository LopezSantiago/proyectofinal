import { Component, OnInit} from '@angular/core';
import { Httpservicio } from './../httpservicio.service';
import { Response } from "@angular/http";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  private usuarios: Array<Object>;
  private usuario:Object;
  private usrselect:boolean;

  constructor(private servicio:Httpservicio) { }
  ngOnInit() {
    this.usrselect=false;
    this.servicio.getDatos().subscribe(
      (datos: any) => this.usuarios=datos,
      err => console.log(err)
    );    
  }

  SelectorDetalle(Aux:Object){
    this.usuario=Aux;
    this.usrselect=true; 
  }


}
