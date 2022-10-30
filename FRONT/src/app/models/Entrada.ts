import { Produto } from "./Produto";

export class Entrada{
    
    _id? : string;
    data_compra! : Date;
    produto? : String;
    quantidade? : Number;
    custo_unitario? : Number;
    createdAt?: Date;
    updatedAt?: Date;
}