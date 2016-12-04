import { Component, OnInit } from '@angular/core';
import { Httpservicio } from './../httpservicio.service';
import { Response } from "@angular/http";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  private usuarios: Array<Object>;
  constructor(private servicio:Httpservicio) { }

  ngOnInit() {
    this.servicio.getDatos().subscribe(
      (datos: any) => this.usuarios=datos,
      err => console.log(err)
    );    
  }

}
