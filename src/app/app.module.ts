import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { BodyComponent } from './components/home/body/body.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { BannerComponent } from './components/home/body/banner/banner.component';
import { SomosComponent } from './components/home/body/somos/somos.component';
import { EspecialidadesComponent } from './components/home/body/especialidades/especialidades.component';
import { ContactoComponent } from './components/home/body/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    BannerComponent,
    SomosComponent,
    EspecialidadesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
