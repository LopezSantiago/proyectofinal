import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  inputs:['user']
})
export class DetalleComponent implements OnInit {
  private user: Object;
  constructor() { }

  ngOnInit() {
  }

}
