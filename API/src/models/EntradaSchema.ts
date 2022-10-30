import {model, Schema} from "mongoose"
import {fornecedorSchema} from "./FornecedorSchema"
import {produtoSchema} from "./ProdutoSchema"

const entradaSchema = new Schema(
    {
        data_compra:{
            type:Date,
            required:[true,"Preencha a data da compra"],
        },
        produto:{
            type: Schema.Types.ObjectId,
            ref:'produto',
            required: [true, "Informe o produto a ser cadastrado"],
        },
        quantidade:{
            type: Number,
            required: [true, "Informe a quantidade comprada"],
            min: [1,"Insira pelo menos 1 unidade"],
        },
        custo_unitario:{
            type:Number,
            required: [true, "Informe o valor de custo do produto"],
        }
        
    },

    {
        timestamps:true,
    }
)

export default model("entrada", entradaSchema)