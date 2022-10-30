import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrada } from '../models/Entrada';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  private baseUrl = "http://localhost:3000/"

  constructor(private http:HttpClient) {}

  listar(): Observable <Entrada[]>{
   return this.http.get<Entrada[]>(`${this.baseUrl}entrada/listar`)
  }

  cadastrar(entrada:Entrada): Observable<Entrada>{
    return this.http.post<Entrada>(`${this.baseUrl}entrada/cadastrar`, entrada)
  }

  delete(id: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}entrada/excluir/${id}`);
  }

}
