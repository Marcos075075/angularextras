import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubirFiicherosComponent } from './components/subir-fiicheros-component/subir-fiicheros-component';
import { HomeComponent } from './components/home-component/home-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { LoginComponent } from './components/login-component/login-component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "subirficheros", component: SubirFiicherosComponent},
  {path: "informes", component: InformesPdfComponent},
  {path: "error", component: ErrorComponent},
  {path: "equipo", component: EquipoComponent},
  {path: "login", component: LoginComponent},
  {path: "subordinados", component: SubordinadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
