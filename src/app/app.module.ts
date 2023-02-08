import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './partes/calculadora/calculadora.component';
import { PantallaComponent } from './partes/pantalla/pantalla.component';
import { BotonComponent } from './partes/boton/boton.component';
import { BtnClearComponent } from './btn-clear/btn-clear.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    PantallaComponent,
    BotonComponent,
    BtnClearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
