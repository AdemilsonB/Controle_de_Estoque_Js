import { Fornecedor } from "./Fornecedor";


export class Produto{
    
    _id? : string;
    codigo_produto? : Number;
    nome_produto? : String;
    fornecedor ?: String;
    categoria? : String;
    createdAt?: Date;
    updatedAt?: Date;
}