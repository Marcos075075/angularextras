import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SubirFiicherosComponent } from './components/subir-fiicheros-component/subir-fiicheros-component';
import { FicherosService } from './services/services.ficheros';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { errorInterceptor } from './interceptors/error-interceptor';
import { provideToastService } from 'ngx-yet-another-toast-library';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { ServiceEquipos } from './services/service.equipos';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { ServiceEmpleado } from './services/service.empleado';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';

@NgModule({
  declarations: [
    App,
    SubirFiicherosComponent,
    MenuComponent,
    HomeComponent,
    InformesPdfComponent,
    ErrorComponent,
    EquipoComponent,
    LoginComponent,
    SubordinadosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    FicherosService,
    ServiceEquipos,
    provideHttpClient(withInterceptors([authTokenInterceptor, errorInterceptor])),
    provideToastService(),
    ServiceEmpleado
  ],
  bootstrap: [App],
})
export class AppModule {}
