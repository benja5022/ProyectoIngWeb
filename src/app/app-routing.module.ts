import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaoceanoScreenComponent } from './screens/ayudaoceano-screen/ayudaoceano-screen.component';
import { DesarrollosuscScreenComponent } from './screens/desarrollosusc-screen/desarrollosusc-screen.component';
import { DonarScreenComponent } from './screens/donar-screen/donar-screen.component';
import { EconomiacScreenComponent } from './screens/economiac-screen/economiac-screen.component';
import { GaleriaScreenComponent } from './screens/galeria-screen/galeria-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LimpiaroceanoscScreenComponent } from './screens/limpiaroceanosc-screen/limpiaroceanosc-screen.component';
import { NoticiasScreenComponent } from './screens/noticias-screen/noticias-screen.component';
import { NuestrascampanasScreenComponent } from './screens/nuestrascampanas-screen/nuestrascampanas-screen.component';
import { SobrenosotrosScreenComponent } from './screens/sobrenosotros-screen/sobrenosotros-screen.component';
import { TratadoscScreenComponent } from './screens/tratadosc-screen/tratadosc-screen.component';
import { UneteScreenComponent } from './screens/unete-screen/unete-screen.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeScreenComponent},
  {path:'noticias', component:NoticiasScreenComponent},
  {path: 'galeria', component:GaleriaScreenComponent},
  {path: 'ayudaoceano', component:AyudaoceanoScreenComponent},
  {path: 'donar', component:DonarScreenComponent},
  {path: 'unete', component:UneteScreenComponent},
  {path: 'sobrenosotros', component:SobrenosotrosScreenComponent},
  {path: 'nuestrascampanas', component:NuestrascampanasScreenComponent},
  {path: 'limpiaroceanosc', component:LimpiaroceanoscScreenComponent},
  {path:'economiac', component: EconomiacScreenComponent} ,
  {path:'desarrollosusc',component: DesarrollosuscScreenComponent},
  {path: 'tratadosc', component: TratadoscScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
