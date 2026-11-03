import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubirFiicherosComponent } from './components/subir-fiicheros-component/subir-fiicheros-component';
import { HomeComponent } from './components/home-component/home-component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "subirficheros", component: SubirFiicherosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
