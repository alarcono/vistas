import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, Response } from '@angular/http';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
