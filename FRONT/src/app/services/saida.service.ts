import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Saida } from '../models/Saida';

@Injectable({
  providedIn: 'root'
})
export class SaidaService {

  private baseUrl = "http://localhost:3000/"

  constructor(private http:HttpClient) {}

  listar(): Observable <Saida[]>{
   return this.http.get<Saida[]>(`${this.baseUrl}saida/listar`)
  }

  cadastrar(saida:Saida): Observable<Saida>{
    return this.http.post<Saida>(`${this.baseUrl}saida/cadastrar`, saida)
  }

  delete(id: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}saida/excluir/${id}`);
  }
}
