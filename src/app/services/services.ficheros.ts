import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fichero } from '../models/fichero';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class FicherosService {
  url = environment.urlApi;

  constructor(private _http: HttpClient) {}

  async subirFichero(fichero: Fichero): Promise<any> {
    let json = JSON.stringify(fichero);
    let header = new HttpHeaders()
    header = header.set('Content-Type', 'application/json');
    let request = "api/testingfiles"
    return firstValueFrom(
        this._http.post(this.url + request, json, { headers: header })
    )
  }
}
