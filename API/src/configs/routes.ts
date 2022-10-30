import {Router} from "express"
import {ProdutoController} from "../controller/ProdutoController"
import {EntradaController} from "../controller/EntradaController"
import {SaidaController} from "../controller/SaidaController"
import {FornecedorController} from "../controller/FornecedorController"

const routes = Router()

const produtoController = new ProdutoController
const entradaController = new EntradaController
const saidaController = new SaidaController
const fornecedorController = new FornecedorController

//produto
routes.post("/produto/cadastrar", produtoController.cadastrar)
routes.get("/produto/listar", produtoController.listar)
routes.get("/produto/listar/:id", produtoController.buscarPorId)
routes.put("/produto/atualizar/:id", produtoController.atualizar)
routes.delete("/produto/excluir/:id", produtoController.excluir)


//entradas
routes.post("/entrada/cadastrar", entradaController.cadastrar)
routes.get("/entrada/listar", entradaController.listar)
routes.get("/entrada/listar/:id", entradaController.buscarPorId)
routes.put("/entrada/atualizar/:id", entradaController.atualizar)
routes.delete("/entrada/excluir/:id", entradaController.excluir)

//saida
routes.post("/saida/cadastrar", saidaController.cadastrar)
routes.get("/saida/listar", saidaController.listar)
routes.get("/saida/listar/:id", saidaController.buscarPorId)
routes.put("/saida/atualizar/:id", saidaController.atualizar)
routes.delete("/saida/excluir/:id", saidaController.excluir)

// fornecedor
routes.post("/fornecedor/cadastrar", fornecedorController.cadastrar)
routes.get("/fornecedor/listar", fornecedorController.listar)
routes.get("/fornecedor/listar/:id", fornecedorController.buscarPorId)
routes.put("/fornecedor/atualizar/:id", fornecedorController.atualizar)
routes.delete("/fornecedor/excluir/:id", fornecedorController.excluir)

export{routes}
