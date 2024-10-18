import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  //selecionar pessoas
  selecionar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  //metodo para cadastrar pessoas
  cadastrar(obj:Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, obj);
  }

    //metodo para editar pessoas
    editar(obj:Cliente): Observable<Cliente> {
      return this.http.put<Cliente>(this.url, obj);
    }

    //metodo para remover pessoas
    remover(codigo:number): Observable<Cliente> {
      return this.http.delete<Cliente>(this.url + codigo);
    }


}
