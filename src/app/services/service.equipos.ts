import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from '../models/equipo';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { SKIP_TOKEN } from '../utils/token.context';

@Injectable()
export class ServiceEquipos {
  constructor(private _http: HttpClient) {}
  url = environment.urlEquipos;

  async getEquiposAsync(): Promise<Equipo[]> {
    let request = 'api/equipos';
    return firstValueFrom(
      this._http.get<Equipo[]>(this.url + request, {
        context: new HttpContext().set(SKIP_TOKEN, true),
      }),
    );
  }
}
