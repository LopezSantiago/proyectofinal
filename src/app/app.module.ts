import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { routing } from './app.routing'

import { Httpservicio } from './httpservicio.service';
import { FormularioComponent } from './formulario/formulario.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [Httpservicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
