import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Login} from './login/login';
import {Contato} from './contato/contato';
import {Sobre} from './sobre/sobre';
import {MuralRecados} from './muralrecados/muralrecados'


export const routes: Routes = [
    { path: '', component: Home},
    { path: 'login', component: Login},
    { path: 'contato', component: Contato},
    { path: 'sobre', component: Sobre},
    { path: 'muralrecados', component: MuralRecados}
];
