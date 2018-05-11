import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/nucleo/login/login.component';
import { HomeComponent } from 'app/nucleo/home/home.component';
import { CabeceraComponent } from 'app/nucleo/cabecera/cabecera.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: "", component: LoginComponent, pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "depas", loadChildren: "../departamentos/departamentos.module#DepartamentosModule"},
  {path: "locales", loadChildren: "../locales/locales.module#LocalesModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class NucleoRoutingModule { }
