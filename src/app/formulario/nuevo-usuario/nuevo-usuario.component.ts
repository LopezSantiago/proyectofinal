import { Component, OnInit } from '@angular/core';
import {DatosServicio} from '../datos.service'

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'], 

})
export class NuevoUsuarioComponent implements OnInit {
private Aux:Object;

  constructor(private ServicioDatos:DatosServicio) { }

  ngOnInit() {
    this.Aux=this.ServicioDatos.getObjeto();
  }

}
