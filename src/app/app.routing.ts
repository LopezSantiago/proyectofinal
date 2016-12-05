import { Routes,RouterModule } from "@angular/router";
import { HomeComponent} from "./home/home.component";
import { UsuariosComponent} from "./usuarios/usuarios.component"
import { FormularioComponent} from "./formulario/formulario.component"



const APP_ROUTES: Routes=[
    {path:'',component:HomeComponent},
    {path:'usuarios',component: UsuariosComponent},
    {path:'formulario',component: FormularioComponent},  
];

export const routing = RouterModule.forRoot(APP_ROUTES)