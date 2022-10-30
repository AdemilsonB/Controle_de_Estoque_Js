import { Request, Response } from "express"
import FornecedorSchema, { fornecedorSchema } from "../models/FornecedorSchema"



class FornecedorController {
  async cadastrar(request: Request, response: Response) {
    const novoFornecedor = await FornecedorSchema.create(request.body);
    response.status(201).json(novoFornecedor)

  }

  async listar(request: Request, response: Response) {
    const fornecedor = await FornecedorSchema.find()
    response.status(200).json(fornecedor)

  }

  async buscarPorId(request: Request, response: Response) {
    try {
      const { id } = request.params
      const fornecedor = await FornecedorSchema.findOne({ _id: id })
      if (fornecedor != null) {
        response.status(200).json({
          objeto: fornecedor,
          msg: "Fornecedor encontrado com sucesso",
          erro: false
        })
      } else {
        response.status(404).json({
          objeto: fornecedor,
          msg: "fornecedor não encontrado",
          erro: false

        })
      }
    } catch (error) {
      response.status(400).json({
        objeto: error,
        msg: "Digite um Id com formato válido",
        erro: true
      })
    }
  }

  async atualizar(request: Request, response: Response) {
    const { _id } = request.body
    response.status(200).json(await FornecedorSchema.findOneAndUpdate({_id}, request.body))

  }


  async excluir(request: Request, response: Response) {
    try {
      const { id } = request.params
      const fornecedor = await FornecedorSchema.findOneAndDelete({ _id: id })

      if (fornecedor != null) {
        response.status(200).json("Fornecedor deletado com sucesso")
      } else {
        response.status(404).json("Fornecedor não encontrado")
      }
    } catch (error) {
      response.status(400).json("Digite um Id com formato válido")
    }

  }


}

export { FornecedorController }
