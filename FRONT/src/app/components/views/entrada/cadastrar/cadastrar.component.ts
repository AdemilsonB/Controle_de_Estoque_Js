import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Entrada } from 'src/app/models/Entrada';
import { EntradaService } from 'src/app/services/entrada.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class EntradaCadastrarComponent implements OnInit {

  data_compra! : string;
  produto? : string;
  quantidade? : string;
  valor_unitario? : string;

  constructor(private service: EntradaService, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrar(): void {
    let entrada = new Entrada()
    entrada.data_compra = new Date(this.data_compra)
    entrada.produto = this.produto
    entrada.quantidade = Number(this.quantidade)
    entrada.custo_unitario = Number(this.valor_unitario)
    this.service.cadastrar(entrada).subscribe((entrada) => {
        this.snack.open("Entrada cadastrada", "entrada", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
        })
  
      })

    }
}