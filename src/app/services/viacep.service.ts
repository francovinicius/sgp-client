import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { environment } from '../../environments/environment';
import { ViaCepResultado } from '../models/ViaCepResultado';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  apiUrl: string = environment.viaCepUrl

  constructor(private http: HttpClient) { }

  getEnderecoByCep(cep: string) {
    return this.http.get<ViaCepResultado>
      (this.apiUrl + cep + "/json/")
      .pipe(
        map((response) => {
        return response;
      })
    )
  }
}
