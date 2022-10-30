import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Saida } from 'src/app/models/Saida';
import { Produto } from 'src/app/models/Produto';
import { SaidaService } from 'src/app/services/saida.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class SaidaCadastrarComponent implements OnInit {

  _id? : string;
  data_venda! : string;
  produto? : string;
  quantidade? : string;
  valor_venda? : string;

  constructor(private service: SaidaService, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrar(): void {
    let saida = new Saida()
    saida.data_venda = new Date(this.data_venda)
    saida.produto = this.produto
    saida.quantidade = Number(this.quantidade)
    saida.valor_venda = Number(this.valor_venda)
    this.service.cadastrar(saida).subscribe((saida) => {
        this.snack.open("Saida cadastrada", "saida", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
        })
  
      })

    }
}
