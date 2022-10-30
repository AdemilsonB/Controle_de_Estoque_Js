import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/models/Entrada';
import { MatTableDataSource } from '@angular/material/table';
import { EntradaService } from 'src/app/services/entrada.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class EntradaListarComponent implements OnInit {

  entradas!: MatTableDataSource<Entrada>
  
  listarColumns: string[] = ['_id', 'data_compra', 'nome_produto','quantidade','valor_unitario', 'deletar'];

  constructor(private service: EntradaService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.entradas = new MatTableDataSource<Entrada>(lista)
    }) 
  }

  delete(id: string) {
    this.service.delete(id)
      .subscribe((entrada) => {
        console.log(entrada);
        this.snack.open("Entrada deletada", "entrada", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate([""]);
      });

    }
}