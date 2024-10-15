import { Routes } from '@angular/router';
import { InicioComponent } from './enrutamiento/inicio/inicio.component';
import { PrimeroComponent } from './enrutamiento/primero/primero.component';
import { SegundoComponent } from './enrutamiento/segundo/segundo.component';
import { PaginanoencontradaComponent } from './enrutamiento/paginanoencontrada/paginanoencontrada.component';
import { HijoAComponent } from './enrutamiento/hijo-a/hijo-a.component';
import { HijoBComponent } from './enrutamiento/hijo-b/hijo-b.component';
import { verificarGuard } from './guard/verificar.guard';
import { NoAuthComponent } from './guard/no-auth/no-auth.component';

export const routes: Routes = [
    {
        path:'inicio',
        component: InicioComponent
    }
    ,
    {
        path:'primero',
        canActivate:[verificarGuard],
        component: PrimeroComponent,
        children:[
            {
                path:'hijo-a',
                component:HijoAComponent
            },
            {
                path:'hijo-b',
                component:HijoBComponent
            }
        ]
    }
    ,
    {
        path:'segundo/:id/:code',
        component: SegundoComponent
    }
    ,
    {
        path:'no-auth',
        component: NoAuthComponent
    }
    ,
    {
        path:'',
        redirectTo:'inicio',
        pathMatch:'full'
    }
    ,
    {
        path:'**',
        component:PaginanoencontradaComponent
    }
];
