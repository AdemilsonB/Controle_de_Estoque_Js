import {model, Schema} from "mongoose"

const fornecedorSchema = new Schema(
    {
    empresa:{
        type:String,
        required:[true,"Preencha o nome da empresa"],
    },
    telefone:{
        type: String,
        required: [true, "Informe o telefone da empresa"],
    },
    email:{
        type: String,
        required: [true, "Informe o email do fornecedor"],
    },
    endereco:{
        type: String,
        required: [true, "Informe o endereço do fornecedor"],
        
    },
    },

    {
        timestamps:true,
    }
)

export default model("fornecedor", fornecedorSchema)
export {fornecedorSchema}
