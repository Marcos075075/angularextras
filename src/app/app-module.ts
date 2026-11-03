import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SubirFiicherosComponent } from './components/subir-fiicheros-component/subir-fiicheros-component';
import { FicherosService } from './services/services.ficheros';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';

@NgModule({
  declarations: [App, SubirFiicherosComponent, MenuComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), FicherosService, provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
