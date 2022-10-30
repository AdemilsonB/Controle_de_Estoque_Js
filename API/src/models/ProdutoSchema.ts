import {model, Schema} from "mongoose"


const produtoSchema = new Schema(
  {
    codigo_produto: {
      type: Number,
      required: [true, "O campo CODIGO é obrigatório!"],
    },
    nome_produto: {
      type: String,
      required: [true, "O campo NOME é obrigatório!"],
    },
    fornecedor:{
      type: Schema.Types.ObjectId,
      ref:'fornecedor',
      required: [true, "Informe o fornecedor do produto"],
  },
    categoria: {
      type: String,
      required: [true, "O campo CATEGORIA é obrigatório!"],
    },
    
  },
  {
    timestamps: true,
  }
);

export default model("produto", produtoSchema);
export { produtoSchema };

