import { Request, Response } from "express"
import EntradaSchema from "../models/EntradaSchema"


class EntradaController {
  async cadastrar(request: Request, response: Response) {
    const novaEntrada = await EntradaSchema.create(request.body);
    response.status(201).json(novaEntrada)

  }

  async listar(request: Request, response: Response) {
    const entradas = await EntradaSchema.find()
    response.status(200).json(entradas)

  }

  async buscarPorId(request: Request, response: Response) {
    try {
      const { id } = request.params
      const entrada = await EntradaSchema.findOne({ _id: id })
      if (entrada != null) {
        response.status(200).json({
          objeto: entrada,
          msg: "Entrada de produto",
          erro: false
        })
      } else {
        response.status(404).json({
          objeto: entrada,
          msg: "Entrada não encontrada",
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
    response.status(200).json(await EntradaSchema.findOneAndUpdate({_id}, request.body))

  }
  async excluir(request: Request, response: Response) {
    try {
      const { id } = request.params
      const entrada = await EntradaSchema.findOneAndDelete({ _id: id })

      if (entrada != null) {
        response.status(200).json("Entrada deletada com sucesso")
      } else {
        response.status(404).json("Entrada não encontrada")
      }

    } catch (error) {
      response.status(400).json("Digite um Id com formato válido")
    }

  }


}

export { EntradaController }
