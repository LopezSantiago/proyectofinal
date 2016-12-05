import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { routing } from './app.routing'

import { Httpservicio } from './httpservicio.service';
import { FormularioComponent } from './formulario/formulario.component'
import {DatosServicio} from './formulario/datos.service';

import { DetalleComponent } from './usuarios/detalle/detalle.component';
import { SelectorDirective } from './usuarios/selector.directive';
import { NombresoloPipe } from './nombresolo.pipe';
import { NuevoUsuarioComponent } from './formulario/nuevo-usuario/nuevo-usuario.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosComponent,
    FormularioComponent,
    DetalleComponent,
    SelectorDirective,
    NombresoloPipe,
    NuevoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [Httpservicio,DatosServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
