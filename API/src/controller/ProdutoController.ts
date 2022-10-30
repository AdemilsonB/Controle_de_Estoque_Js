import {Request, Response} from "express"
import ProdutoSchema from "../models/ProdutoSchema"



class ProdutoController{
async cadastrar(request: Request, response: Response) {
      const novoProduto = await ProdutoSchema.create(request.body);
      response.status(201).json(novoProduto)
    
  }

async listar(request:Request, response:Response) {
  const produtos = await ProdutoSchema.find()
  response.status(200).json(produtos)

}

async buscarPorId(request:Request, response:Response) {
  try{
  const {id} = request.params
  const produto = await ProdutoSchema.findOne({_id: id})
  if(produto != null){
    response.status(200).json({
      objeto: produto,
      msg: "Listagem de produto por id realizada com sucesso",
      erro: false
    }) 
  } else{
    response.status(404).json({
      objeto: produto,
      msg: "Produto não encontrado",
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
  const {_id } = request.body
  response.status(200).json(await ProdutoSchema.findOneAndUpdate({_id}, request.body))

}

async excluir (request:Request, response:Response){
  try{
    const {id} = request.params
    const produto = await ProdutoSchema.findOneAndDelete({_id: id})

    if(produto != null){
      response.status(200).json("Produto deletado com sucesso") 
    } else{
      response.status(404).json("Produto não encontrado")
    }
  } catch (error) {
    response.status(400).json("Digite um Id com formato válido")
  }

}


}

export {ProdutoController}