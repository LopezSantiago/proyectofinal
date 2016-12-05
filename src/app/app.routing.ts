import { Routes,RouterModule } from "@angular/router";
import { HomeComponent} from "./home/home.component";
import { UsuariosComponent} from "./usuarios/usuarios.component"
import { FormularioComponent} from "./formulario/formulario.component"
import{Form_route} from"./formulario/formulario.routing"


const APP_ROUTES: Routes=[
    {path:'',component:HomeComponent},
    {path:'usuarios',component: UsuariosComponent},
    {path:'formulario',component: FormularioComponent},
    {path:'formulario',component: FormularioComponent,children:Form_route},
  
];

export const routing = RouterModule.forRoot(APP_ROUTES)