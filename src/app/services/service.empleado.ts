import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Login } from '../models/login';
import { Empleado } from '../models/empleado';
import { SKIP_TOKEN } from '../utils/token.context';

@Injectable()
export class ServiceEmpleado {
  url = environment.apiEmpleados;
  constructor(private _http: HttpClient) {}
  async loginEmpleado(user: Login): Promise<any> {
    let request = 'auth/login';
    let json = JSON.stringify(user);
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return firstValueFrom(
      this._http.post(this.url + request, json, {
        headers: header,
        context: new HttpContext().set(SKIP_TOKEN, true),
      }),
    );
  }

  async getPerfilEmpleado(): Promise<any> {
    let request = 'api/empleados/perfilempleado';
    let token = sessionStorage.getItem('token');
    let header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return firstValueFrom(this._http.get(this.url + request, { headers: header }));
  }

  async getSubordinadosAsync(): Promise<Empleado[]> {
    let request = 'api/empleados/subordinados';
    return firstValueFrom(this._http.get<Empleado[]>(this.url + request));
  }
}
