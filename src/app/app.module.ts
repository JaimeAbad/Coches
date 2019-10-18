//Rutas
import { APP_ROUTING } from './app.routes';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Servicios
import { CochesService } from './services/services.component';
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { InfoComponent } from './components/shared/info/info.component';
import { CochesComponent } from './components/shared/coches/coches.component';
import { CocheComponent } from './components/shared/coche/coche.component';
import { BuscadorComponent } from './components/shared/buscador/buscador.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InfoComponent,
    CochesComponent,
    CocheComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,


    APP_ROUTING
  ],
  providers: [
    CochesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
