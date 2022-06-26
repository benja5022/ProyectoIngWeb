import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EconomiacScreenComponent } from './screens/economiac-screen/economiac-screen.component';
import { DesarrollosuscScreenComponent } from './screens/desarrollosusc-screen/desarrollosusc-screen.component';
import { AyudaoceanoScreenComponent } from './screens/ayudaoceano-screen/ayudaoceano-screen.component';
import { DonarScreenComponent } from './screens/donar-screen/donar-screen.component';
import { GaleriaScreenComponent } from './screens/galeria-screen/galeria-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LimpiaroceanoscScreenComponent } from './screens/limpiaroceanosc-screen/limpiaroceanosc-screen.component';
import { NoticiasScreenComponent } from './screens/noticias-screen/noticias-screen.component';
import { NuestrascampanasScreenComponent } from './screens/nuestrascampanas-screen/nuestrascampanas-screen.component';
import { SobrenosotrosScreenComponent } from './screens/sobrenosotros-screen/sobrenosotros-screen.component';
import { TratadoscScreenComponent } from './screens/tratadosc-screen/tratadosc-screen.component';
import { UneteScreenComponent } from './screens/unete-screen/unete-screen.component';
import { TextdesComponent } from './components/textdes/textdes.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    EconomiacScreenComponent,
    DesarrollosuscScreenComponent,
    AyudaoceanoScreenComponent,
    DonarScreenComponent,
    GaleriaScreenComponent,
    HomeScreenComponent,
    LimpiaroceanoscScreenComponent,
    NoticiasScreenComponent,
    NuestrascampanasScreenComponent,
    SobrenosotrosScreenComponent,
    TratadoscScreenComponent,
    UneteScreenComponent,
    TextdesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
