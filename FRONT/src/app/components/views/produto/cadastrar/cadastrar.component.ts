import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class ProdutoCadastrarComponent implements OnInit {

  codigo_produto!: String
  nome_produto!: String
  fornecedor !: String
  categoria!: String

  constructor(private service: ProdutoService, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrar(): void {
    let produto = new Produto()
    produto.codigo_produto = Number(this.codigo_produto)
    produto.nome_produto = this.nome_produto
    produto.fornecedor = this.fornecedor
    produto.categoria = this.categoria
    this.service.cadastrar(produto).subscribe((produto) => {
      this.snack.open("Livro cadastrado", "livro", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      })

    })

  }
}
