import { Produto } from "./Produto";

export class Saida{
    
    _id? : string;
    data_venda! : Date;
    produto? : String;
    quantidade? : Number;
    valor_venda? : Number;
    createdAt?: Date;
    updatedAt?: Date;
}