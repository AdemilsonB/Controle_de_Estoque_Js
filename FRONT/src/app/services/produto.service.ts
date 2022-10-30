import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

private baseUrl = "http://localhost:3000/"

  constructor(private http:HttpClient) {}

  listar(): Observable <Produto[]>{
   return this.http.get<Produto[]>(`${this.baseUrl}produto/listar`)
  }

  cadastrar(produto:Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.baseUrl}produto/cadastrar`, produto)
  }

  delete(id: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}produto/excluir/${id}`);
  }

  

}