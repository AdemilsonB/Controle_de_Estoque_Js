import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { MatTableDataSource } from '@angular/material/table';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ProdutoListarComponent implements OnInit {

  produtos!: MatTableDataSource<Produto>


  listarColumns: string[] = ['id', 'codigo_produto', 'nome_produto', 'fornecedor', 'categoria', 'createdAt','deletar'];

  constructor(private service: ProdutoService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.produtos = new MatTableDataSource<Produto>(lista)
    })

  }

  delete(id: string) {
    this.service.delete(id)
      .subscribe((produto) => {
        console.log(produto);
        this.snack.open("Produto deletado", "produto", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate([""]);
      });
  }
}
