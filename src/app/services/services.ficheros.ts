import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Fichero } from '../models/fichero';
import { firstValueFrom, Observable } from 'rxjs';
import { SKIP_TOKEN } from '../utils/token.context';

@Injectable()
export class FicherosService {
  url = environment.urlFicheros;

  constructor(private _http: HttpClient) {}

  async subirFichero(fichero: Fichero): Promise<any> {
    let json = JSON.stringify(fichero);
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    let request = 'api/testingfiles';
    return firstValueFrom(this._http.post(this.url + request, json, { headers: header }));
  }

  postFile(fichero: Fichero): Observable<any> {
    let json = JSON.stringify(fichero);
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    let request = 'api/testingfiles';
    return this._http.post(this.url + request, json, {
      headers: header,
      context: new HttpContext().set(SKIP_TOKEN, true),
    });
  }
}
