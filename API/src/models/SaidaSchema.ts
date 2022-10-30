import {model, Schema} from "mongoose"
import {produtoSchema} from "./ProdutoSchema"

const saidaSchema = new Schema(
    {
        data_venda:{
            type:Date,
            required:[true,"Preencha a data da venda"],
        },
        produto:{
            type: Schema.Types.ObjectId,
            ref:'produto',
            required: [true, "Informe o produto vendido"],
        },
        quantidade:{
            type: Number,
            required: [true, "Informe a quantidade vendida"],
            min: [1,"Insira pelo menos 1 unidade"],
        },
        valor_venda:{
            type:Number,
            required: [true, "Informe o valor de venda"],
        }

    },

    {
        timestamps:true,
    }
)

export default model("saida", saidaSchema)
