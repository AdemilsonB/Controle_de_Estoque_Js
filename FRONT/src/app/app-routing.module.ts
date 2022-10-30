import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntradaCadastrarComponent } from './components/views/entrada/cadastrar/cadastrar.component';
import { EntradaDeletarComponent } from './components/views/entrada/deletar/deletar.component';
import { EntradaEditarComponent } from './components/views/entrada/editar/editar.component';
import { EntradaListarComponent } from './components/views/entrada/listar/listar.component';
import { FornecedorCadastrarComponent } from './components/views/fornecedor/cadastrar/cadastrar.component';
import { FornecedorDeletarComponent } from './components/views/fornecedor/deletar/deletar.component';
import { FornecedorEditarComponent } from './components/views/fornecedor/editar/editar.component';
import { FornecedorListarComponent } from './components/views/fornecedor/listar/listar.component';
import { ProdutoCadastrarComponent } from './components/views/produto/cadastrar/cadastrar.component';
import { ProdutoDeletarComponent } from './components/views/produto/deletar/deletar.component';
import { ProdutoEditarComponent } from './components/views/produto/editar/editar.component';
import { ProdutoListarComponent } from './components/views/produto/listar/listar.component';
import { SaidaCadastrarComponent } from './components/views/saida/cadastrar/cadastrar.component';
import { SaidaDeletarComponent } from './components/views/saida/deletar/deletar.component';
import { SaidaEditarComponent } from './components/views/saida/editar/editar.component';
import { SaidaListarComponent } from './components/views/saida/listar/listar.component';


const routes: Routes = [
  {
    //rota para listar os registros de entrada
    path : '', //raiz
    component : EntradaListarComponent
  },
  {
    //rota para cadastrar os registros de entrada
    path : 'entrada/cadastrar',
    component : EntradaCadastrarComponent
  },
  {
    //rota para editar os registros de entrada
    path : 'entrada/editar',
    component : EntradaEditarComponent
  },
  {
    //rota para deletar os registros de entrada
    path : 'entrada/deletar',
    component : EntradaDeletarComponent
  },
  {
    //rota para listar os fornecedores
    path : 'fornecedor/listar',
    component : FornecedorListarComponent
  },
  {
    //rota para cadastrar fornecedor
    path : 'fornecedor/cadastrar',
    component : FornecedorCadastrarComponent
  },
  {
    //rota para editar fornecedor
    path : 'fornecedor/editar',
    component : FornecedorEditarComponent
  },
  {
    //rota para deletar fornecedor
    path : 'fornecedor/deletar',
    component : FornecedorDeletarComponent
  },
  {
    //rota para listar os produtos
    path : 'produto/listar',
    component : ProdutoListarComponent
  },
  {
    //rota para cadastrar produto
    path : 'produto/cadastrar',
    component : ProdutoCadastrarComponent
  },
  {
    //rota para editar produto
    path : 'produto/editar',
    component : ProdutoEditarComponent
  },
  {
    //rota para deletar produto
    path : 'produto/deletar',
    component : ProdutoDeletarComponent
  },
  {
    //rota para listar saidas
    path : 'saida/listar',
    component : SaidaListarComponent
  },
  {
    //rota para cadastrar saida
    path : 'saida/cadastrar',
    component : SaidaCadastrarComponent
  },
  {
    //rota para editar saida
    path : 'saida/editar',
    component : SaidaEditarComponent
  },
  {
    //rota para deletar saida
    path : 'saida/deletar',
    component : SaidaDeletarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
