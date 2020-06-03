import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

//Rutas
import { app_routing } from "./app.routes";


//servicios
import { InformacionService } from "./services/informacion.service";


//Componentes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProtafolioComponent } from './components/protafolio/protafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoComponent } from './components/producto/producto.component';
import { HomeComponent } from './components/home/home.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { TestComponent } from './components/testa/testa.component';
import { AdultoComponent } from './components/adulto/adulto.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProtafolioComponent,
    ProductoComponent,
    AboutComponent,
    HomeComponent,
    TestComponent,
    PreguntasComponent,
    AdultoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing,
    HttpClientModule
  ],
  providers: [InformacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
