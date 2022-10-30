import {Request, Response} from "express"
import SaidaSchema from "../models/SaidaSchema"


class SaidaController{
async cadastrar(request: Request, response: Response) {
    try {
      const novaSaida = await SaidaSchema.create(request.body);
      response.status(201).json({
        objeto: novaSaida,
        msg: "Cadastro realizado com sucesso",
        erro: false
      })
    } catch (error) {
      response.status(400).json({
        objeto: error,
        msg: "Falha na validação de saida",
        erro: true
      })
    }
  }

async listar(request:Request, response:Response) {
  try{
  const saida = await SaidaSchema.find().populate('produto')
  response.status(200).json({
    objeto: saida,
    msg: "Lista produtos de saida",
    erro: false
  })
} catch (error) {
  response.status(400).json({
    objeto: error,
    msg: "Não foi possível listar as saidas de produtos",
    erro: true
  })
}
}

async buscarPorId(request:Request, response:Response) {
  try{
  const {id} = request.params
  const saidaprod = await SaidaSchema.findOne({_id: id})
  if(saidaprod!= null){
    response.status(200).json({
      objeto: saidaprod,
      msg: "Saida de produto",
      erro: false
    }) 
  } else{
    response.status(404).json({
      objeto: saidaprod,
      msg: "Saida não encontrada",
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
  response.status(200).json(await SaidaSchema.findOneAndUpdate({_id}, request.body))

}

async excluir (request:Request, response:Response){
  try{
    const {id} = request.params
    const saida = await SaidaSchema.findOneAndDelete({_id: id})

    if(saida != null){
      response.status(200).json("Saida deletada com sucesso") 
    } else{
      response.status(404).json("Saida não encontrada")
    }

  } catch (error) {
    response.status(400).json("Digite um Id com formato válido")
  }

}


}

export {SaidaController}
