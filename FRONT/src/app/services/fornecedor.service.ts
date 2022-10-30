import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/Fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private baseUrl = "http://localhost:3000/"

  constructor(private http:HttpClient) {}

  listar(): Observable <Fornecedor[]>{
   return this.http.get<Fornecedor[]>(`${this.baseUrl}fornecedor/listar`)
  }

  cadastrar(fornecedor:Fornecedor): Observable<Fornecedor>{
    return this.http.post<Fornecedor>(`${this.baseUrl}fornecedor/cadastrar`, fornecedor)
  }
  
  delete(id: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}fornecedor/excluir/${id}`);
  }
  
  
  

}
