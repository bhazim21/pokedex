import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FotoPokemonComponent } from './component/foto-pokemon/foto-pokemon.component';
import { ListaPokemonComponent } from './component/lista-pokemon/lista-pokemon.component';
import { DetallePokemonComponent } from './component/detalle-pokemon/detalle-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FotoPokemonComponent,
    ListaPokemonComponent,
    DetallePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
