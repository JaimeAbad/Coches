import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { InfoComponent } from './components/shared/info/info.component';
import { CochesComponent } from './components/shared/coches/coches.component';
import { CocheComponent } from './components/shared/coche/coche.component';
import { BuscadorComponent } from './components/shared/buscador/buscador.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'coches', component: CochesComponent },
  { path: 'coche/:id', component: CocheComponent },
  { path: 'buscar/:palabra', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
